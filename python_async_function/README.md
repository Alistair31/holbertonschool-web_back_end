# Python - Async Function

## Concepts clés

### Programmation asynchrone — pourquoi ?

La programmation **synchrone** attend que chaque opération se termine avant de passer à la suivante. La programmation **asynchrone** permet d'effectuer d'autres tâches pendant qu'une opération attend (une réponse réseau, un délai, etc.).

```
Synchrone :   A → attendre → B → attendre → C
Asynchrone :  A, B, C → démarrent ensemble → on recueille les résultats
```

---

### async / await — 0-basic_async_syntax.py

```python
import asyncio
import random

async def wait_random(max_delay: int = 10) -> float:
    """Attend un délai aléatoire entre 0 et max_delay secondes."""
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)   # suspend la coroutine sans bloquer le thread
    return delay
```

- `async def` : déclare une **coroutine** (fonction asynchrone).
- `await` : suspend la coroutine le temps qu'une opération se termine.
- `asyncio.sleep(n)` : équivalent asynchrone de `time.sleep(n)`.

**Exécuter une coroutine :**
```python
asyncio.run(wait_random(5))
```

---

### Lancer plusieurs coroutines — 1-concurrent_coroutines.py

```python
import asyncio
from typing import List

async def wait_n(n: int, max_delay: int) -> List[float]:
    """Démarre n coroutines et retourne les délais dans l'ordre de fin."""
    delays = []
    for coro in asyncio.as_completed([wait_random(max_delay) for _ in range(n)]):
        delays.append(await coro)
    return delays
```

- `asyncio.as_completed(coroutines)` : retourne les coroutines dans l'ordre où elles se **terminent** (pas dans l'ordre de lancement).
- Cela permet d'obtenir une liste déjà triée par durée d'exécution.

**Autres méthodes utiles :**
```python
# Attendre toutes les coroutines (résultats dans l'ordre de lancement)
results = await asyncio.gather(coro1(), coro2(), coro3())
```

---

### Mesurer le temps d'exécution — 2-measure_runtime.py

```python
import asyncio
import time

async def measure_time(n: int, max_delay: int) -> float:
    start = time.perf_counter()
    await wait_n(n, max_delay)
    return (time.perf_counter() - start) / n
```

- `time.perf_counter()` : horloge haute précision pour mesurer des durées.

---

### asyncio.Task — 3-tasks.py et 4-tasks.py

Une **Task** est une coroutine enveloppée pour s'exécuter dans l'event loop.

```python
import asyncio

def task_wait_random(max_delay: int) -> asyncio.Task:
    """Crée une tâche asyncio pour wait_random."""
    return asyncio.get_event_loop().create_task(wait_random(max_delay))
```

- `asyncio.Task` : permet de démarrer une coroutine en arrière-plan.
- `asyncio.get_event_loop().create_task(coro)` : planifie la coroutine dans la boucle d'événements.
- La Task commence **immédiatement** (contrairement à une coroutine qui ne démarre qu'à l'`await`).

**Différence coroutine vs Task :**

| | Coroutine | Task |
|--|-----------|------|
| Démarrage | À l'`await` | Immédiatement |
| Concurrence | Non (séquentielle) | Oui |
| Création | `async def` | `create_task()` |

---

### L'event loop

L'**event loop** est le moteur de l'asyncio : il gère l'exécution des coroutines et tasks.

```python
# Python 3.7+
asyncio.run(main())   # crée et exécute l'event loop

# Ancienne syntaxe
loop = asyncio.get_event_loop()
loop.run_until_complete(main())
```

---

## Résumé des fichiers

| Fichier | Concept principal |
|---------|-------------------|
| `0-basic_async_syntax.py` | `async def`, `await`, `asyncio.sleep` |
| `1-concurrent_coroutines.py` | `asyncio.as_completed`, concurrence |
| `2-measure_runtime.py` | `time.perf_counter`, mesure de durée |
| `3-tasks.py` | `asyncio.Task`, `create_task` |
| `4-tasks.py` | Remplacer coroutines par Tasks |
