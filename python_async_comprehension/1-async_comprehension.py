#!/usr/bin/env python3
"""Module for creating tasks with async comprehensions."""
import asyncio
async_generator = __import__('0-async_generator.py').async_generator


async def async_comprehension():
    """Collect 10 random numbers using async comprehensions."""
    return [i async for i in async_generator()]
