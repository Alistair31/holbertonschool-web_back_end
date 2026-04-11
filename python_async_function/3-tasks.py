#!/usr/bin/env python3
"""Module for creating tasks with wait_random."""

wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int):
    """Create a task that waits for a random delay."""
    return type('Task', (), {'__await__': lambda: wait_random(max_delay)})()
