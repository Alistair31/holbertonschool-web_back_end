# Python - Async Comprehension

## Concepts clés

### Générateur asynchrone — 0-async_generator.py

Un **générateur asynchrone** est une fonction qui utilise `async def` et `yield`. Il produit des valeurs une par une, avec possibilité d'attendre entre chaque.

```python
import asyncio
import random
from typing import AsyncGenerator

async def async_generator() -> AsyncGenerator[float, None]:
    """Génère 10 nombres aléatoires avec 1 seconde d'attente entre chaque."""
    for _ in range(10):
        await asyncio.sleep(1)   # attendre 1 seconde de manière asynchrone
        yield random.uniform(0, 10)
```

- `AsyncGenerator[float, None]` : générateur qui produit des `float` et ne retourne rien.
- `yield` : produit une valeur sans terminer la fonction (comme un générateur classique).
- `await` à l'intérieur : possible car c'est une coroutine.

---

### async for — itérer sur un générateur asynchrone

```python
async def consommer():
    async for valeur in async_generator():
        print(valeur)
```

- `async for` : équivalent de `for`, mais pour les itérables asynchrones.
- Ne peut être utilisé qu'à l'intérieur d'une fonction `async def`.

---

### Compréhension asynchrone — 1-async_comprehension.py

```python
async def async_comprehension() -> list:
    """Collecte 10 nombres aléatoires via une compréhension asynchrone."""
    return [i async for i in async_generator()]
```

- `[... async for ... in ...]` : compréhension de liste asynchrone.
- Équivalent d'une liste en compréhension classique, mais pour les générateurs asynchrones.

**Comparaison :**
```python
# Générateur classique
nombres = [x for x in range(10)]

# Générateur asynchrone
nombres = [x async for x in async_generator()]
```

---

### Exécution parallèle — 2-measure_runtime.py

```python
import asyncio

async def measure_runtime() -> float:
    """Mesure le temps d'exécution de 4 async_comprehension en parallèle."""
    start = asyncio.get_event_loop().time()
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    )
    return asyncio.get_event_loop().time() - start
```

- `asyncio.gather(*coroutines)` : lance toutes les coroutines **en parallèle** et attend qu'elles soient toutes terminées.
- Résultat : 4 `async_comprehension()` tournent simultanément → durée totale ≈ 10 secondes (et non 40 secondes en séquentiel).

**Pourquoi ≈ 10 secondes et non 40 ?**

Chaque `async_comprehension()` attend 10 × 1 seconde de manière asynchrone. Avec `gather`, les 4 s'exécutent en parallèle, donc le temps total reste ≈ 10 secondes (le temps de la plus longue).

---

### Tableau de comparaison

| Concept | Synchrone | Asynchrone |
|---------|-----------|------------|
| Générateur | `def f(): yield x` | `async def f(): yield x` |
| Itération | `for x in f()` | `async for x in f()` |
| Compréhension | `[x for x in f()]` | `[x async for x in f()]` |
| Attente | `time.sleep(n)` | `await asyncio.sleep(n)` |
| Exécution parallèle | threads / multiprocessing | `asyncio.gather()` |

---

## Résumé des fichiers

| Fichier | Concept principal |
|---------|-------------------|
| `0-async_generator.py` | `AsyncGenerator`, `yield` asynchrone |
| `1-async_comprehension.py` | `async for`, compréhension asynchrone |
| `2-measure_runtime.py` | `asyncio.gather`, exécution parallèle |
