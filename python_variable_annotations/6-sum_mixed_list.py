#!/usr/bin/env python3
"""Module that take a list of integer and float and sum them"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Return the sum of all int and float from the list"""
    return sum(mxd_lst)
