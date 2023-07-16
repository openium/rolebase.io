CREATE OR REPLACE VIEW "public"."news" AS
 SELECT id,
    "orgId",
    id AS "threadId",
    NULL::uuid AS "decisionId",
    NULL::uuid AS "meetingId",
    "createdAt"
   FROM thread
  WHERE archived = false
UNION
 SELECT id,
    "orgId",
    NULL::uuid AS "threadId",
    id AS "decisionId",
    NULL::uuid AS "meetingId",
    "createdAt"
   FROM decision
  WHERE archived = false
UNION
 SELECT id,
    "orgId",
    NULL::uuid AS "threadId",
    NULL::uuid AS "decisionId",
    id AS "meetingId",
    "createdAt"
   FROM meeting
  WHERE archived = false AND ended = true;
