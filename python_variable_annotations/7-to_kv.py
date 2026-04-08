#!/usr/bin/env python3
"""Module that takes a string and int or float and returns a tuple"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return a tuple with the string k and the square of v as float"""
    return (k, float(v * v))
