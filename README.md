# jQuery To-Do List

Jednoduchý **To-Do List** vytvořený pomocí jQuery s uložením do `localStorage`.

---

## Technologie
- HTML, CSS, JavaScript
- [jQuery](https://jquery.com/)
- LocalStorage pro uložení dat

---

## Funkce
- Přidávání nových úkolů.
- Zaškrtávání úkolů (completed / uncompleted) – stav se ukládá.
- Mazání úkolů.
- Úkoly jsou **persistentní** i po obnovení stránky díky `localStorage`.
- Každý úkol má **unikátní ID**, což umožňuje:
  - rychlé zaškrtávání bez přepisování celého seznamu
  - bezpečné mazání konkrétního úkolu
- Nové úkoly se přidávají přímo do DOM (append-only), čímž je aplikace rychlá i při větším počtu úkolů.

---

## Online projekt
Projekt je k dispozici online zde: [To-Do List](https://jantrejtnar.github.io/jq-to-do-list/)

---

## Struktura úkolu/tasku
```json
{
  "id": 1690000000000,   // unikátní ID vytvořené pomocí Date.now()
  "title": "Název úkolu",  // hodnota z input pole
  "checked": false       // stav úkolu
}
