import {
    RefreshContext,
    IndexCaseContext,
    TodosContext,
    ShowModalContext,
    LoadingContext,
} from "./context";

export const AppAllContext = ({ children, refresh, index, todos, showModal, loading }) => {
    return (
        <RefreshContext value={refresh} >
            <IndexCaseContext value={index}>
                <TodosContext value={todos}>
                    <ShowModalContext value={showModal}>
                        <LoadingContext value={loading}>{children}</LoadingContext>
                    </ShowModalContext>
                </TodosContext>
            </IndexCaseContext>
        </RefreshContext>
    );
};
