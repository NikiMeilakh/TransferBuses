class LoadingState{
    isLoading;
    isLoadingTransfers;
    isLoadingNextTransfers;
    isLoadingNewTransfer;
    constructor(isLoading, isLoadingTransfers,
                isLoadingNextTransfers, isLoadingNewTransfer) {
        this.isLoading=isLoading;
        this.isLoadingTransfers=isLoadingTransfers;
        this.isLoadingNextTransfers=isLoadingNextTransfers;
        this.isLoadingNewTransfer=isLoadingNewTransfer;
    }
}