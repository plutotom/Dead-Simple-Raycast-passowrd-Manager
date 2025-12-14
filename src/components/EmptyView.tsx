import { ActionPanel, List } from "@raycast/api";
import { Filter, Password } from "../types";
import CreateTodoAction from "./CreateTodoAction";

function EmptyView(props: {
  todos: Password[];
  filter: Filter;
  searchText: string;
  onCreate: (title: string, password: string) => void;
}) {
  if (props.todos.length > 0) {
    return (
      <List.EmptyView
        icon="😕"
        title="No matching passwords found"
        description={`Can't find a todo matching ${props.searchText}.\nCreate it now!`}
        actions={
          <ActionPanel>
            <CreateTodoAction defaultTitle={props.searchText} onCreate={props.onCreate} />
          </ActionPanel>
        }
      />
    );
  }
  switch (props.filter) {
    case Filter.Open: {
      return (
        <List.EmptyView
          icon="🎉"
          title="All done"
          description="All passwords completed - way to go! Why not create some more?"
          actions={
            <ActionPanel>
              <CreateTodoAction defaultTitle={props.searchText} onCreate={props.onCreate} />
            </ActionPanel>
          }
        />
      );
    }
    case Filter.Completed: {
      return (
        <List.EmptyView
          icon="😢"
          title="No passwords completed"
          description="Uh-oh, looks like you haven't completed any passwords yet."
        />
      );
    }
    case Filter.All:
    default: {
      return (
        <List.EmptyView
          icon="📝"
          title="No passwords found"
          description="You don't have any passwords yet. Why not add some?"
          actions={
            <ActionPanel>
              <CreateTodoAction defaultTitle={props.searchText} onCreate={props.onCreate} />
            </ActionPanel>
          }
        />
      );
    }
  }
}
export default EmptyView;
