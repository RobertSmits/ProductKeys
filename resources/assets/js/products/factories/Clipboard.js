function Clipboard ($compile, $rootScope, $document) {
    return {
        toClipboard: function (element) {
            var copyElement = angular.element('<span id="ngClipboardCopyId">' + element + '</span>');
            var body = $document.find('body').eq(0);
            body.append($compile(copyElement)($rootScope));

            var ngClipboardElement = angular.element(document.getElementById('ngClipboardCopyId'));
            console.log(ngClipboardElement);
            var range = document.createRange();

            range.selectNode(ngClipboardElement[0]);

            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);

            var successful = document.execCommand('copy');

            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copying text command was ' + msg);
            window.getSelection().removeAllRanges();

            copyElement.remove();
        }
    }
}

Clipboard.$inject = ['$compile', '$rootScope', '$document'];
export default Clipboard;
