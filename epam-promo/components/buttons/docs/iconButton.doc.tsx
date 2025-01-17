import * as React from 'react';
import { allIconColors, IconButton, IconButtonProps } from '../IconButton';
import { ColorPicker, DocBuilder } from '@epam/uui-docs';
import { onClickDoc, isDisabledDoc, iCanRedirectDoc, iconDoc, isInvalidDoc } from '../../../docs';
import { DefaultContext, FormContext } from '../../../docs';
import { colors } from '../../../helpers/colorMap';

const IconButtonDoc = new DocBuilder<IconButtonProps>({ name: 'IconButton', component: IconButton })
    .implements([onClickDoc, isDisabledDoc, isInvalidDoc, iCanRedirectDoc, iconDoc])
    .prop('color', { renderEditor: (editable, examples) => <ColorPicker colors={ examples.map(i => ({ value: i, hex: colors[i] })) } { ...editable } />, examples: allIconColors })
    .withContexts(DefaultContext, FormContext);

export = IconButtonDoc;