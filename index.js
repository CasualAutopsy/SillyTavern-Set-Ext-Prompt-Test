/** @import {} from './global' */

const { setExtensionPrompt, eventSource, eventTypes } = SillyTavern.getContext();

function injectExtPrompts() {
    setExtensionPrompt(
        'ext-prompt-test',
        'test 123',
        1, // position (1 = @depth)
        0, // depth
        false,
        0, // role (0 = system)
        () => true, // Filter (expected behavior: prompt is injected.)
    );

    setExtensionPrompt(
        'ext-prompt-test2',
        'test 456',
        1, // position (1 = @depth)
        0, // depth
        false,
        0, // role (0 = system)
        () => false, // Filter (expected behavior: promt is NOT injected.)
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


