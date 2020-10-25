"""
problem: https://www.hackerrank.com/challenges/staircase/problem
"""
staircase_size = 16

def staircase(n):
    layer_string = [' ' for i in range(n)]
    for layer in range(n):
        if layer == 0:
            layer_string[-1] = '#'
        layer += 1
        if layer != 0:
            layer_string[0 - layer] = '#'
        print(''.join(layer_string))

staircase(staircase_size)
