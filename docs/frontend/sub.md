DELETE FROM quotes WHERE id IS NULL;
SELECT setval('quotes_id_seq', (SELECT MAX(id) FROM quotes)+1)
