class KeyBottomSheetController {
    constructor($scope, $mdBottomSheet) {
        this.$scope = $scope;
        this.$mdBottomSheet = $mdBottomSheet;
        this.$scope.items = [
            { name: 'Edit', icon: 'edit', action: 'edit' },
            { name: 'Delete', icon: 'delete', action: 'delete' }
        ];
        this.$scope.listItemClick = action =>
            $mdBottomSheet.hide(action);
    }
}

KeyBottomSheetController.$inject = ['$scope', '$mdBottomSheet'];
export default KeyBottomSheetController;
