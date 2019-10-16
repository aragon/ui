# aragonUI Theme Palette

An aragonUI theme is a set of colors assigned to a predefined palette. All aragonUI components use colors from this palette, making it possible to swap the palette (theme) for another one in an app. aragonUI includes two themes by default, _light_ and _dark_, but any other can be provided, including by extending them.

## Notes

Colors meant to be applied on text are indicated using the _Content_ suffix. The reason why it is not using _Text_ is because these also apply to other outline content like icons.

When a color like _foo_ is followed by a color named _fooContent_, it generally means that _foo_ should be used as a background color for _fooContent_.

Gradients are defined using the _Start_ and _End_ suffixes.

Colors don’t include opacity. When using aragonUI’s `useTheme()`, the `.alpha(0.5)` method can be used on any color. It will apply the desired opacity and return the result as a CSS color using the `rgba()` syntax.

## Palette groups

This section describes the palette colors and how they should be used. The groups are created based on how they relate to each other.

### Base

The colors defined in this group are either used by default (border, content, overlay), or on the base layer (background).

#### _background_

The base layer on which apps are being rendered.

#### _border_

The border color used everywhere by default, except in specific cases like _controlBorder_.

#### _overlay_

The color used for overlays. Some components using an overlay color are SidePanel or Modal.

#### _content_

The base color for text and outline content. To be used over _background_.

#### _contentSecondary_

Secondary color for text and outline content. To be used over _background_.

#### _link_

Used as a base color for links.

#### _focus_

The color for focus rings.

#### _accent_

The _accent_ color can be used to put an emphasis on a component or a certain part of a component, without any specific semantic.

#### _accentContent_

To be used for text and outline content over _accent_.

#### _accentStart_ / _accentEnd_

This is the gradient equivalent of _accent_.

### Surface

The main surface as defined by aragonDS and its different states. This group of colors is being used by containers components (Box, DataView, etc.) and more (handles, Button, etc.).

#### _surface_

The background color used for surfaces.

#### _surfaceContent_

The primary color used for text and outline content over _surface_.

#### _surfaceContentSecondary_

The secondary color used for text and outline content over _surface_.

#### _surfaceIcon_

This color is generally used for icons over _surface_. Note: in some cases, icons over _surface_ are also using _surfaceContent_ or _surfaceContentSecondary_.

#### _surfaceUnder_

This is used as a background base for surfaces that appear to be at a lower level than the parent _surface_ itself. For instance, the _DataView_ component is using this color for its entry expansion.

#### _surfaceOpened_

Communicates that a _surface_ is being “opened”, generally revealing a surface using _surfaceUnder_ underneath. The _DataView_ component is using this color for the side border of its entry expansion.

#### _surfaceSelected_

Indicates that a _surface_, or a part of it, is being selected. This is the color _DataView_ is using to indicate that an entire row is selected.

#### _surfaceHighlight_

Indicates that a _surface_, or a part of it, is being highlighted. This color could be used to reflect a hover or focused state.

#### _surfacePressed_

Indicates that a _surface_, or a part of it, is being pressed − either by a pointer or a touch event.

### Info

Used to indicate informative content in general.

#### _info_

This info color is generally stronger than _infoSurface_. It should be used for icons, borders, etc.

#### _infoSurface_

The surface info color, generally softer than _info_. It should be used for background colors.

#### _infoSurfaceContent_

To be used for text and outline content over _infoSurface_.

### Feedback

Used to signal feedback, in the broad sense. For instance, this set of colors is used to show the status of a transaction in the signing panel.

#### _feedbackSurface_

Use this color as a background color for feedback.

#### _feedbackSurfaceContent_

Primary color to be used for text and outline content over _feedbackSurface_.

#### _feedbackSurfaceContentSecondary_

Secondary color to be used for text and outline content over _feedbackSurface_.

### Warning

Used to indicate warnings.

#### _warning_

This warning color is generally stronger than _warningSurface_. It should be used for icons, borders, etc.

#### _warningSurface_

The surface warning color, generally softer than _warning_. It should be used for background colors.

#### _warningSurfaceContent_

To be used for text and outline content over _warningSurface_.

### Help

Used for elements related to helping the user.

#### _help_

This help color is generally stronger than _helpSurface_ and should be used for icons, borders, etc.

#### _helpContent_

To be used for text and outline content over _help_.

#### _helpSurface_

This help color is generally softer than _help_ and should be used for background colors.

#### _helpSurfaceContent_

To be used for text and outline content over _helpSurface_.

### Positive

Used to communicate something positive. It can be used for successful operations, but also for other things like voting “Yes”.

#### _positive_

Use this color to communicate a positive information (e.g. success, an action to vote yes).

#### _positiveContent_

To be used for text and outline content over _positive_.

#### _positiveSurface_

A softer _positive_, to be used when a large amount of information needs to be communicated.

#### _positiveSurfaceContent_

To be used for text and outline content over _positiveSurface_.

### Negative

Used to communicate something negative. It can be used for errors, but also for other things like voting “No”.

#### _negative_

Use this color to communicate a negative information (e.g. error, an action to vote no).

#### _negativeContent_

To be used for text and outline content over _negative_.

#### _negativeSurface_

A softer _negative_, to be used when a large amount of information need to be communicated. For instance, the Info component is using it as a background color in error mode.

#### _negativeSurfaceContent_

To be used for text and outline content over _negativeSurfaceContent_.

### Tag

This set of colors is used by the Tag component and its different modes.

#### _tagIdentifier_

Used to identify or label a subject.

#### _tagIdentifierContent_

To be used for text and outline content over _tagIdentifier_.

#### _tagNew_

Used to indicate that a subject is new, or updated.

#### _tagNewContent_

To be used for text and outline content over _tagNew_.

#### _tagIndicator_

Used for indicators in the general sense.

#### _tagIndicatorContent_

To be used for text and outline content over _tagIndicator_.

#### _tagActivity_

Used to represent some activity that happened, like a number of notifications.

#### _tagActivityContent_

To be used for text and outline content over _tagActivity_

### Badge

This colors are used for badge-like components: IdentityBadge, AppBadge, etc.

### _badge_

The background color of badge-like components.

### _badgeContent_

To be used for text and outline content over _badge_.

### _badgePressed_

The pressed state of _badge_.

### Floating

Floating elements, like tooltips.

### _floating_

The background color of a floating element.

### _floatingContent_

To be used for text and outline content over _floating_.

### Controls

Colors related to controls, that could be used in forms or elsewhere.

#### _hint_

Used for hints (or placeholders) inside of text input or similar components.

#### _selected_

Indicates a selection in the broad sense.

#### _selectedContent_

To be used for text and outline content over _selected_.

#### _disabled_

The background color of disabled components like Button.

#### _disabledContent_

The text or outline content to be used over _disabled_.

#### _disabledIcon_

This color is generally used for icons over _disabled_. Note: icons over _disabled_ could also be using _disabledContent_.

#### _control_

Used as a background color for some control components like Checkbox, Radio or Switch.

#### _controlBorder_

Used as a border color for some control components like Checkbox, Radio or Switch.

#### _controlBorderPressed_

Used as a border color for the pressed state of some control components like Checkbox, Radio or Switch.

#### _controlDisabled_

The background color for the disabled state of some control components like Checkbox, Radio or Switch.

### Colors

These colors can be used when a color is needed for its semantics. An example could be a chart using a red and a blue curve. Even if their theme is different, two users should still be able to refer to these by using the terms “red” or “blue”.

Themes are free to implement their own variation of these colors, but they should respect the naming (e.g. _green_ can vary, but should use a color that is commonly accepted to be “green”).

Available color names:

- _green_
- _yellow_
- _red_
- _blue_
- _brown_
- _purple_
