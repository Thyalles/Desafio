# Projeto: Benchmarks - Estado Atual e Histórico

Este projeto consiste em um modelo de banco de dados para gerenciar benchmarks, seus controles e o histórico de estado de cada um.

## **Modelo de Dados**

O modelo foi projetado para atender aos seguintes cenários:

- **Listar o estado atual**: Obter o benchmark e seus controles, com o estado mais recente de cada um.
- **Consultar por intervalo**: Listar as mudanças de estado dos controles em um período de tempo definido.
- **Consultar por data/hora**: Encontrar o estado de um controle em uma data e hora específicas.

## **Tabelas**

1.  **`BENCHMARK`**: Gerencia as entidades de benchmark.
2.  **`CONTROLE`**: Gerencia os controles, associando-os a um benchmark.
3.  **`STATE_HISTORY`**: Armazena o registro de cada mudança de estado para cada controle, com data e hora.

## **Índices**

Para otimizar o desempenho das consultas, foi criado o seguinte índice:

-   `state_history.(controle_id, changed_at)`: Para buscas e ordenações eficientes do histórico de estado, permitindo encontrar o estado atual, por intervalo ou por data hora.
