# React Language Context

# The task
* ceate a reach app with the structure semilar with the one bellow able to pass context between components

## Components Structure
* __AppLang.js__ (Context Provider)
    * __Child.js__ (stateless)
        * __GrandChild.js__ (stateless)
            * __GreatGrandChild.js__ (stateless) - having the triggers that are firing the context change;
    * __LangControls.js__ (Context Consumer)  gets the _"onSetLang"_ call back prop from the __App.js__
    * __LanguageContext.js__ the structure of the context file that gets to imported where is necesary; gets _"lang"_ the _"setLang"_ callback prop from the __App.js__
    * __languageSpecificCopy.js__ simple object with all the language specific copy
