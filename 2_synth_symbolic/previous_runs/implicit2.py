from hyper_synth.automata import Plant
from hyper_synth.datatype import DataType
from hyper_synth.encoding import (DataTypeEncoding, SetEncoding,
                                  equal_tuple_form)
from hyper_synth.hyperautomata import (ExplicitHyperAutomaton,
                                       SymbolicHyperAutomaton)
from hyper_synth.qbf import NOT, TRUE
from hyper_synth.qbf_encoding import ControllerSynthesisEncodingQBF
from hyper_synth.qbf import *
import logging
import sys
from hyper_synth.qbf_solver import QBFSolver



solver = QBFSolver(tmp_dir_path=".", preprocessing=True)


logging.basicConfig(stream=sys.stdout, level=logging.DEBUG)
pt = DataType({'is_cont': ['0', '1', 'null', ''], 'PC': ['4', '12', '15', '25', 'null', ''], 'con_y': ['true', 'false', 'null', '']})
plant = Plant(label_type=pt)
# add an empty init state
plant.add_vertex(label=pt.default_value)
# make it initial state
plant.initial_state_index = 0

# trace 1
# ucon_x = true
# ucon_z = true
# supp_0 = true
plant.add_vertex(label=pt(is_cont="0", PC="4", con_y="true")) # index:1
plant.add_uncont_edges([(0, 1)], weight=[1])
plant.add_vertex(label=pt(is_cont="0", PC="12", con_y="true")) # index:2
plant.add_uncont_edges([(1, 2)], weight=[1])
plant.add_vertex(label=pt(is_cont="0", PC="15", con_y="true")) # index:3
plant.add_uncont_edges([(2, 3)], weight=[1])
plant.add_vertex(label=pt(is_cont="1", PC="25", con_y="true")) # index:4
plant.add_cont_edges([(3, 4)], weight=[1])

# trace 2
# ucon_x = false
# ucon_z = false
# supp_0 = false
plant.add_vertex(label=pt(is_cont="0", PC="4", con_y="false")) # index:5
plant.add_uncont_edges([(0, 5)], weight=[1])
plant.add_vertex(label=pt(is_cont="0", PC="12", con_y="false")) # index:6
# repeating uncontrollable edge: (5,5), ignore 
plant.add_vertex(label=pt(is_cont="0", PC="15", con_y="false")) # index:7
plant.add_uncont_edges([(5, 7)], weight=[1])
plant.add_vertex(label=pt(is_cont="1", PC="25", con_y="false")) # index:8
plant.add_cont_edges([(7, 8)], weight=[1])

# trace 3
# ucon_x = false
# ucon_z = true
# supp_0 = false
# repeating state at PC=4, goes back to index:5
# repeating uncontrollable edge: (0,5), ignore 
# repeating state at PC=12, goes back to index:6
plant.add_uncont_edges([(5, 6)], weight=[1])
# repeating state at PC=25, goes back to index:7
plant.add_uncont_edges([(6, 7)], weight=[1])
# repeating state at PC=25, goes back to index:8
# repeating controllable edge: (7,8), ignore 
#
#
#
"""
A hyper automaton: Forall Forall, observational determinism on controllable con_y
"""
# Plant output type
# Forall quantifier

pt_enc = DataTypeEncoding(pt)
quants = (2,)
h = SymbolicHyperAutomaton(quants, pt, pt_enc)

true_form = lambda v1, v2: TRUE
wait_outputs = lambda v1, v2: NOT(OR(pt_enc.encodes_var_form(v1, PC='25'),pt_enc.encodes_var_form(v2, PC='25')))
end_condition = lambda v1, v2: AND(pt_enc.same_var_form(v1, v2, 'con_y'), AND(pt_enc.encodes_var_form(v1, PC='25'),pt_enc.encodes_var_form(v2, PC='25')))


h.add_vertices(3, )
h.initial_state_indices = [0]
h.vs["marked"] = True

h.add_edge(0, 1, true_form)
h.add_edge(1, 1, wait_outputs)
h.add_edge(1, 2, end_condition)
#
#
#
def _run_cont_synth(plant, h):
    prob = ControllerSynthesisEncodingQBF(plant, h, do_optimization=True, no_deadlocks=False, quantify_path_steps=False)
    prob.encode()
    output = prob.solve()
    if output.is_error:
        raise RuntimeError('Solver error: ', output.msg)
    controller = prob.decode_controller(output.model)
    return controller


c1 = _run_cont_synth(plant, h)

if(str(c1) != 'None'):
    print('controller found!')
    print(type(c1))
    print(c1)
    print(c1.vs['label'])
    state_num = (c1.vs['name'])
    c = 0
    for l in (c1.vs['label']):
      print(str(state_num[c]) + ' :  ' + str(l))
      c += 1

else:
    print('controller not found.')
