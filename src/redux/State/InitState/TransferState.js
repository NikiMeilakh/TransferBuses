class TransferState{
    isFilterApply=false;
    transfers=[];
    nextTransfers=[];

    constructor(isFilterApply, transfers ,
                nextTransfers) {
        this.isFilterApply=isFilterApply;
        this.transfers=transfers;
        this.nextTransfers=nextTransfers;
    }
}