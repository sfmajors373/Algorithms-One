#!/bin/python3
import itertools
import sys
import math

# print([x for x in itertools.permutations([0, 1, 2, 3])])
cities = [
    {"name": "Denver", "x": 500, "y": 500},
    {"name": "Salt Lake City", "x": 300, "y": 500},
    {"name": "Cheyenne", "x": 500, "y": 600},
    {"name": "Santa Fe", "x": 500, "y": 350}
    ]
perms = itertools.permutations([0, 1, 2, 3])
best_trip_length = sys.float_info.max
best_trip = []

def distance(city1, city2):
    dist = math.sqrt(math.pow((city2["x"] - city1["x"]), 2) + math.pow((city2["y"] - city1["y"]), 2))
    return dist


for item in perms:
    # print(item)
    current_trip_length = 0
    # for num in perms:
    # for x in range(len(item)):
    for x in range(4):
        # print(current_trip_length)
        j = x
        if (j + 1) > 3:
            k = 0
        else:
            k = j + 1
        current_trip_length = current_trip_length + distance(cities[j], cities[k])
    if current_trip_length < best_trip_length:
        best_trip_length = current_trip_length
        best_trip = item
# for num in best_trip:
#     current = cities[num]
#     print(current["name"]

# print(best_trip_length)

print(best_trip)
print(best_trip_length)


#*****************tests*****************
# dist1 = (distance(cities[0], cities[1]))
# dist2 = (distance(cities[1], cities[2]))
# dist3 = (distance(cities[2], cities[3]))
# dist4 = (distance(cities[3], cities[0]))
# total = dist1 + dist2 + dist3 + dist4
# print(total)
