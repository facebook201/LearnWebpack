import React, { Component, ChangeEvent, FormEvent, Fragment } from "react";
import './TodoApp.css';

interface Action {
  type: string; // 操作类型
}

enum BuiltinTag {
  IMPORTANT = '重要',
  NOTIMPORTANT = '不重要',
  URGENT = '紧急',
  NOTURGENT = '不紧急'
}

const BUILTIN_TAGS = [
  BuiltinTag.IMPORTANT,
  BuiltinTag.NOTIMPORTANT,
  BuiltinTag.URGENT,
  BuiltinTag.NOTURGENT
];

enum Status {
  CREATED = "创建",
  DOING = "处理中",
  PAUSE = "暂停处理",
  FINISHED = "已完成",
  DELETED = "已删除"
};

const TodoHeader = () => {
  return (
    <thead>
      <tr className="todo-list-header">
        <td>创建时间</td>
        <td>名称</td>
        <td>标签</td>
        <td>状态</td>
        <td>操作</td>
      </tr>
    </thead>
  );
};

enum TodoActionType {
  ADD_TAG = 'add_tag',
  REMOVE_TAG = 'remove_tag',
  ADD = 'add',
  REMOVE = 'remove',
}

interface Phase {
  form: Date;
  to?: Date;
  status: Status;
}

interface Todo {
  name: string;
  tags: string[];
  phases: Phase[]
}

interface TodoAction extends Action {
  todo: Todo;
}


// todo列表项
interface TodoItemProps {
  todo: Todo;
}

class TodoItem extends Component<TodoItemProps> {
  state = {
    showTagSelect: false
  };
}


export class TodoApp extends Component {
  unsubscribe: (() => void) | undefined;

  componentDidMount() {
    this.unsubscribe = todoStore.subscribe(() => {
      this.setState(todoStore.getState());
    });
  }

  componentWillMount() {
    this.unsubscribe && this.unsubscribe();
  }

  render() {
    return (
      <div>
        <StoreContext.Provider value={todoStore}>
          <TodoFilter />
          <table>
            <TodoHeader />
            <TodoList />
          </table>
          <TodoForm />
        </StoreContext.Provider>
      </div>
    );
  }
}
