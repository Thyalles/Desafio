# 📊 Desafio de Banco de Dados --- Benchmarks (Estado Atual e Histórico)

## 📌 Mini-mundo

-   **Benchmark** (`id`, `name`) possui vários **Controles**.\
-   **Controle** (`id`, `name`, `description`) pertence a um **Benchmark** e possui um estado (`ok | alarm`).\
-   É possível registrar mudanças de estado para reconstruir o histórico.

## 📂 Cenários

1.  **Q1** --- Listar Benchmark com seus Controles e o estado **atual**.\
2.  **Q2** --- Listar Benchmark com seus Controles e as mudanças de estado em um **intervalo de tempo**.\
3.  **Q3** --- Obter Benchmark com seus Controles e o estado em uma **data/hora X**.

## 🗄️ Modelo Conceitual

Entidades principais:\
- `Benchmark`\
- `Controle`\
- `Account` (para associação)\
- `State_History` (para histórico dos estados)

Relacionamentos:\
- `Benchmark` 1:N `Controle`\
- `Controle` 1:N `State_History`\
- `Account` N:N `Benchmark`

## ⚡ Índices Sugeridos

-   **`ACCOUNT_ID`** (para consultas por conta).\
-   **`BENCHMARK_ID`** (para buscas de Benchmarks e seus Controles).\
-   **`(ACCOUNT_ID, CONTROLE_ID, CHANGED_AT)`** (para recuperar estados de forma eficiente, ordenados por data/hora).
