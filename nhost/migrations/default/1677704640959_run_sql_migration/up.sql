UPDATE thread_activity ta
SET "refThreadId" = (data->>'entityId')::uuid
WHERE ta.type = 'Thread'
    AND EXISTS (
       SELECT 1 FROM thread WHERE id = (ta.data->>'entityId')::uuid
    );

UPDATE thread_activity ta
SET "refMeetingId" = (data->>'entityId')::uuid
WHERE ta.type = 'Meeting'
    AND EXISTS (
       SELECT 1 FROM meeting WHERE id = (ta.data->>'entityId')::uuid
    );

UPDATE thread_activity ta
SET "refTaskId" = (data->>'entityId')::uuid
WHERE ta.type = 'Task'
    AND EXISTS (
       SELECT 1 FROM task WHERE id = (ta.data->>'entityId')::uuid
    );

UPDATE thread_activity ta
SET "refDecisionId" = (data->>'entityId')::uuid
WHERE ta.type = 'Decision'
    AND EXISTS (
       SELECT 1 FROM decision WHERE id = (ta.data->>'entityId')::uuid
    );

UPDATE thread_activity ta
SET "refMeetingId" = (data->>'meetingId')::uuid
WHERE ta.type = 'MeetingNote'
    AND EXISTS (
       SELECT 1 FROM meeting WHERE id = (ta.data->>'meetingId')::uuid
    );
