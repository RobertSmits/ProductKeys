class KeyBottomSheetController {
    constructor($scope, $mdBottomSheet, Clipboard) {
        this.$scope = $scope;
        this.$mdBottomSheet = $mdBottomSheet;
        this.$scope.items = [
            { name: 'Copy', icon: 'file_copy', action: 'copy' },
            { name: 'Edit', icon: 'edit', action: 'edit' },
            { name: 'Delete', icon: 'delete', action: 'delete' }
        ];
        this.$scope.listItemClick = action => {
            if (action === 'copy') Clipboard.toClipboard(this.key.key);
            $mdBottomSheet.hide(action);
        }
    }
}

KeyBottomSheetController.$inject = ['$scope', '$mdBottomSheet', 'Clipboard'];
export default KeyBottomSheetController;
