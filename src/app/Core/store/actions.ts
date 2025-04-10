// actions.ts
import { createAction, props } from '@ngrx/store';
 

export const addTodo = createAction(
  '[Todo] Add Todo',
  props<{ todo: any }>()
);

export const deleteTodo = createAction(
  '[Todo] Delete Todo',
  props<{ id: string }>()
);
