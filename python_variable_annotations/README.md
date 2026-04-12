# Python - Variable Annotations

## Concepts clés

### Qu'est-ce que les annotations de type ?

Les **annotations de type** (type hints) permettent d'indiquer le type attendu des variables, paramètres et valeurs de retour des fonctions. Elles ne sont pas vérifiées à l'exécution par Python, mais permettent aux outils comme **mypy** de détecter les erreurs à l'avance.

```python
# Sans annotation
def add(a, b):
    return a + b

# Avec annotation
def add(a: float, b: float) -> float:
    return a + b
```

---

### Annoter des variables simples — 4-define_variables.py

```python
a: int = 1
pi: float = 3.14
i_understand_annotations: bool = True
school: str = "Holberton"
```

- `int`, `float`, `bool`, `str` sont les types de base.
- La syntaxe est : `nom: type = valeur`.

---

### Le module `typing`

Pour des types plus complexes, on importe depuis `typing` :

```python
from typing import List, Tuple, Dict, Union, Callable, Iterable, Sequence
```

#### List — 5-sum_list.py

```python
from typing import List

def sum_list(input_list: List[float]) -> float:
    return sum(input_list)
```

- `List[float]` : une liste de flottants.
- `List[str]`, `List[int]`, etc.

#### Tuple — 7-to_kv.py

```python
from typing import Union, Tuple

def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    return (k, float(v * v))
```

- `Tuple[str, float]` : un tuple avec exactement un str et un float.
- `Union[int, float]` : accepte soit un int, soit un float.

#### Callable — 8-make_multiplier.py

```python
from typing import Callable

def make_multiplier(multiplier: float) -> Callable[[float], float]:
    return lambda x: x * multiplier
```

- `Callable[[float], float]` : une fonction qui prend un float et retourne un float.

#### Iterable et Sequence — 9-element_length.py

```python
from typing import Iterable, Sequence, List, Tuple

def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    return [(i, len(i)) for i in lst]
```

- `Iterable` : tout objet sur lequel on peut itérer (liste, tuple, générateur…).
- `Sequence` : itérable avec un accès par index et une longueur (liste, str, tuple…).

---

### Union — accepter plusieurs types

```python
from typing import Union

def process(value: Union[int, str]) -> str:
    return str(value)
```

- `Union[int, str]` signifie que `value` peut être un `int` ou un `str`.
- Depuis Python 3.10 : `int | str` est équivalent.

---

### Vérifier les types avec mypy

```bash
# Installer mypy
pip install mypy

# Vérifier un fichier
mypy 0-add.py
```

mypy analyse le code statiquement (sans l'exécuter) et signale les erreurs de type.

---

## Résumé des fichiers

| Fichier | Concept principal |
|---------|-------------------|
| `0-add.py` | `float` → annotation de base |
| `1-concat.py` | `str` → concaténation annotée |
| `2-floor.py` | `int` → `math.floor` avec annotation |
| `3-to_str.py` | `str` → conversion `str(n)` annotée |
| `4-define_variables.py` | Annoter des variables (`int`, `float`, `bool`, `str`) |
| `5-sum_list.py` | `List[float]` → somme d'une liste |
| `6-sum_mixed_list.py` | `List[Union[int, float]]` → liste mixte |
| `7-to_kv.py` | `Tuple`, `Union` → retourner un tuple |
| `8-make_multiplier.py` | `Callable` → retourner une fonction |
| `9-element_length.py` | `Iterable`, `Sequence` → types génériques |
