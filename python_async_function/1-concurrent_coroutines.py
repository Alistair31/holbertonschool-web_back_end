#!/usr/bin/env python3
"""1-concurrent_coroutines.py"""
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> list[float]:
    delays = []
    for coro in asyncio.as_completed([wait_random(max_delay) for _ in range(n)]):
        delays.append(await coro)
    return delays
