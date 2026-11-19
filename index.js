/** @import {} from './global' */

const { setExtensionPrompt, eventSource, eventTypes } = SillyTavern.getContext();

function injectExtPrompts() {
    setExtensionPrompt(
        'ext-prompt-test',
        'test 123',
        1,
        0,
        false,
        0,
        () => true,
    );

    setExtensionPrompt(
        'ext-prompt-test2',
        'test 456',
        1,
        0,
        false,
        0,
        () => false,
    );
}

function initEvents() {
    eventSource.on(eventTypes.MESSAGE_SENT, () => {
        injectExtPrompts()
    });
    eventSource.on(eventTypes.MESSAGE_RECEIVED, () => {
        injectExtPrompts()
    });
    eventSource.on(eventTypes.MESSAGE_SWIPED, () => {
        injectExtPrompts()
    });
}

initEvents();


