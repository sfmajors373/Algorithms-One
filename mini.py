#!/bin/python3
def permutation(stuff):
    # if stuff empty, no permutations
    if len(stuff) == 0:
        return []
    elif len(stuff) == 1: # if only one element, only one permutation
        return [stuff]
    else:
        listList = []
        for i in range(len(stuff)):
            current = stuff[i]
            restOfList = stuff[:i] + stuff[i + 1:]
            for p in permutation(restOfList):
                listList.append([current] + p)
        return listList

test = list('123')
for p in permutation(test):
    print(p)
