import { http, HttpResponse } from 'msw';
import initialTasks from './tasks.json';

let tasks = initialTasks.map((task) => ({ ...task }));
let id = 3;

const createTask = (title) => {
  const now = '2024-02-28T00:00:00.000Z';
  const task = {
    id: `test-${id++}`,
    title,
    completed: false,
    createdAt: now,
    lastModified: now,
  };
  tasks.push(task);
  return task;
};

export const handlers = [
  http.get('/api/tasks', () => {
    return HttpResponse.json(tasks);
  }),

  http.post('/api/tasks', async ({ request }) => {
    const { title } = await request.json();

    if (!title) {
      return HttpResponse.json(
        { message: 'A title is required' },
        { status: 400 },
      );
    }

    return HttpResponse.json(createTask(title), { status: 201 });
  }),

  http.patch('/api/tasks/:id', async ({ params, request }) => {
    const updates = await request.json();
    const task = tasks.find((item) => item.id === params.id);

    if (!task) {
      return HttpResponse.json({ message: 'Task not found' }, { status: 404 });
    }

    if (updates.title !== undefined) task.title = updates.title;
    if (updates.completed !== undefined) task.completed = updates.completed;
    task.lastModified = '2024-02-28T00:00:00.000Z';

    return new HttpResponse(null, { status: 204 });
  }),

  http.delete('/api/tasks/:id', ({ params }) => {
    const index = tasks.findIndex((item) => item.id === params.id);

    if (index === -1) {
      return HttpResponse.json({ message: 'Task not found' }, { status: 404 });
    }

    tasks.splice(index, 1);
    return new HttpResponse(null, { status: 204 });
  }),
];
