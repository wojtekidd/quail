'use strict';

const AAdjacentWithSameResourceShouldBeCombined = require('AAdjacentWithSameResourceShouldBeCombined');
const AImgAltNotRepetitive = require('AImgAltNotRepetitive');
const AInPHasADistinctStyle = require('AInPHasADistinctStyle');
const ALinkTextDoesNotBeginWithRedundantWord = require('ALinkTextDoesNotBeginWithRedundantWord');
const ALinkWithNonText = require('ALinkWithNonText');
const ALinksAreSeparatedByPrintableCharacters = require('ALinksAreSeparatedByPrintableCharacters');
const ALinksDontOpenNewWindow = require('ALinksDontOpenNewWindow');
const ALinksNotSeparatedBySymbols = require('ALinksNotSeparatedBySymbols');
const ALinksToMultiMediaRequireTranscript = require('ALinksToMultiMediaRequireTranscript');
const ALinksToSoundFilesNeedTranscripts = require('ALinksToSoundFilesNeedTranscripts');
const AMultimediaTextAlternative = require('AMultimediaTextAlternative');
const AMustContainText = require('AMustContainText');
const AMustHaveTitle = require('AMustHaveTitle');
const AMustNotHaveJavascriptHref = require('AMustNotHaveJavascriptHref');
const AppletContainsTextEquivalent = require('AppletContainsTextEquivalent');
const AppletContainsTextEquivalentInAlt = require('AppletContainsTextEquivalentInAlt');
const AppletProvidesMechanismToReturnToParent = require('AppletProvidesMechanismToReturnToParent');
const AppletTextEquivalentsGetUpdated = require('AppletTextEquivalentsGetUpdated');
const AppletUIMustBeAccessible = require('AppletUIMustBeAccessible');
const AppletsDoNotFlicker = require('AppletsDoNotFlicker');
const AppletsDonotUseColorAlone = require('AppletsDonotUseColorAlone');
const ASuspiciousLinkText = require('ASuspiciousLinkText');
const ATitleDescribesDestination = require('ATitleDescribesDestination');
const AnimatedGifMayBePresent = require('AnimatedGifMayBePresent');
const AreaAltIdentifiesDestination = require('AreaAltIdentifiesDestination');
const AreaAltRefersToText = require('AreaAltRefersToText');
const AreaDontOpenNewWindow = require('AreaDontOpenNewWindow');
const AreaHasAltValue = require('AreaHasAltValue');
const AreaLinksToSoundFile = require('AreaLinksToSoundFile');
const AudioMayBePresent = require('AudioMayBePresent');
const BasefontIsNotUsed = require('BasefontIsNotUsed');
const BlinkIsNotUsed = require('BlinkIsNotUsed');
const BlockquoteNotUsedForIndentation = require('BlockquoteNotUsedForIndentation');
const BlockquoteUseForQuotations = require('BlockquoteUseForQuotations');
const BoldIsNotUsed = require('BoldIsNotUsed');
const ButtonHasName = require('ButtonHasName');
const CheckboxHasLabel = require('CheckboxHasLabel');
const ColorBackgroundGradientContrast = require('ColorBackgroundGradientContrast');
const ColorBackgroundImageContrast = require('ColorBackgroundImageContrast');
const ColorElementBehindBackgroundGradientContrast = require('ColorElementBehindBackgroundGradientContrast');
const ColorElementBehindBackgroundImageContrast = require('ColorElementBehindBackgroundImageContrast');
const ColorElementBehindContrast = require('ColorElementBehindContrast');
const ColorFontContrast = require('ColorFontContrast');
const CssDocumentMakesSenseStyleTurnedOff = require('CssDocumentMakesSenseStyleTurnedOff');
const DefinitionListsAreUsed = require('DefinitionListsAreUsed');
const DoctypeProvided = require('DoctypeProvided');
const DocumentAcronymsHaveElement = require('DocumentAcronymsHaveElement');
const DocumentAutoRedirectNotUsed = require('DocumentAutoRedirectNotUsed');
const DocumentContentReadableWithoutStylesheets = require('DocumentContentReadableWithoutStylesheets');
const DocumentHasTitleElement = require('DocumentHasTitleElement');
const DocumentIsWrittenClearly = require('DocumentIsWrittenClearly');
const DocumentLangIsISO639Standard = require('DocumentLangIsISO639Standard');
const DocumentLangNotIdentified = require('DocumentLangNotIdentified');
const DocumentMetaNotUsedWithTimeout = require('DocumentMetaNotUsedWithTimeout');
const DocumentReadingDirection = require('DocumentReadingDirection');
const DocumentStrictDocType = require('DocumentStrictDocType');
const DocumentTitleDescribesDocument = require('DocumentTitleDescribesDocument');
const DocumentTitleIsNotPlaceholder = require('DocumentTitleIsNotPlaceholder');
const DocumentTitleIsShort = require('DocumentTitleIsShort');
const DocumentTitleNotEmpty = require('DocumentTitleNotEmpty');
const DocumentVisualListsAreMarkedUp = require('DocumentVisualListsAreMarkedUp');
const DomOrderMatchesVisualOrder = require('DomOrderMatchesVisualOrder');
const EmbedHasAssociatedNoEmbed = require('EmbedHasAssociatedNoEmbed');
const EmbedMustHaveAltAttribute = require('EmbedMustHaveAltAttribute');
const FieldsetHasLabel = require('FieldsetHasLabel');
const FileHasLabel = require('FileHasLabel');
const FontIsNotUsed = require('FontIsNotUsed');
const FormButtonsHaveValue = require('FormButtonsHaveValue');
const FormErrorMessageHelpsUser = require('FormErrorMessageHelpsUser');
const FormHasGoodErrorMessage = require('FormHasGoodErrorMessage');
const FormHasSubmitButton = require('FormHasSubmitButton');
const FormWithRequiredLabel = require('FormWithRequiredLabel');
const HeaderH1 = require('HeaderH1');
const HeaderH1Format = require('HeaderH1Format');
const HeaderH2 = require('HeaderH2');
const HeaderH2Format = require('HeaderH2Format');
const HeaderH3 = require('HeaderH3');
const HeaderH3Format = require('HeaderH3Format');
const HeaderH4 = require('HeaderH4');
const HeaderH4Format = require('HeaderH4Format');
const HeaderH5Format = require('HeaderH5Format');
const HeaderH6Format = require('HeaderH6Format');
const HeadersAttrRefersToATableCell = require('HeadersAttrRefersToATableCell');
const HeadersHaveText = require('HeadersHaveText');
const HeadersUseToMarkSections = require('HeadersUseToMarkSections');
const IIsNotUsed = require('IIsNotUsed');
const IdrefsHasCorrespondingId = require('IdrefsHasCorrespondingId');
const IframeMustNotHaveLongdesc = require('IframeMustNotHaveLongdesc');
const ImageMapServerSide = require('ImageMapServerSide');
const ImgAltIsDifferent = require('ImgAltIsDifferent');
const ImgAltIsTooLong = require('ImgAltIsTooLong');
const ImgAltNotEmptyInAnchor = require('ImgAltNotEmptyInAnchor');
const ImgAltNotPlaceHolder = require('ImgAltNotPlaceHolder');
const ImgHasAlt = require('ImgHasAlt');
const ImgHasLongDesc = require('ImgHasLongDesc');
const ImgImportantNoSpacerAlt = require('ImgImportantNoSpacerAlt');
const ImgNonDecorativeHasAlt = require('ImgNonDecorativeHasAlt');
const ImgServerSideMapNotUsed = require('ImgServerSideMapNotUsed');
const ImgShouldNotHaveTitle = require('ImgShouldNotHaveTitle');
const ImgWithMapHasUseMap = require('ImgWithMapHasUseMap');
const ImgWithMathShouldHaveMathEquivalent = require('ImgWithMathShouldHaveMathEquivalent');
const InputCheckboxRequiresFieldset = require('InputCheckboxRequiresFieldset');
const InputElementsDontHaveAlt = require('InputElementsDontHaveAlt');
const InputImageAltIsNotFileName = require('InputImageAltIsNotFileName');
const InputImageAltIsNotPlaceholder = require('InputImageAltIsNotPlaceholder');
const InputImageAltIsShort = require('InputImageAltIsShort');
const InputImageAltNotRedundant = require('InputImageAltNotRedundant');
const InputImageHasAlt = require('InputImageHasAlt');
const InputTextHasLabel = require('InputTextHasLabel');
const InputTextHasValue = require('InputTextHasValue');
const InputTextValueNotEmpty = require('InputTextValueNotEmpty');
const InputWithoutLabelHasTitle = require('InputWithoutLabelHasTitle');
const LabelDoesNotContainInput = require('LabelDoesNotContainInput');
const LabelMustBeUnique = require('LabelMustBeUnique');
const LabelMustNotBeEmpty = require('LabelMustNotBeEmpty');
const LabelsAreAssignedToAnInput = require('LabelsAreAssignedToAnInput');
const LanguageDirAttributeIsUsed = require('LanguageDirAttributeIsUsed');
const LanguageDirectionPunctuation = require('LanguageDirectionPunctuation');
const LanguageUnicodeDirection = require('LanguageUnicodeDirection');
const LegendTextNotEmpty = require('LegendTextNotEmpty');
const LegendTextNotPlaceholder = require('LegendTextNotPlaceholder');
const LiDontUseImageForBullet = require('LiDontUseImageForBullet');
const LinkHasAUniqueContext = require('LinkHasAUniqueContext');
const ListNotUsedForFormatting = require('ListNotUsedForFormatting');
const ListOfLinksUseList = require('ListOfLinksUseList');
const MarqueeIsNotUsed = require('MarqueeIsNotUsed');
const MenuNotUsedToFormatText = require('MenuNotUsedToFormatText');
const NewWindowIsOpened = require('NewWindowIsOpened');
const ObjectMustContainText = require('ObjectMustContainText');
const ObjectMustHaveEmbed = require('ObjectMustHaveEmbed');
const ObjectMustHaveTitle = require('ObjectMustHaveTitle');
const ObjectMustHaveValidTitle = require('ObjectMustHaveValidTitle');
const PNotUsedAsHeader = require('PNotUsedAsHeader');
const PasswordHasLabel = require('PasswordHasLabel');
const PreShouldNotBeUsedForTabularLayout = require('PreShouldNotBeUsedForTabularLayout');
const RadioHasLabel = require('RadioHasLabel');
const ScriptOnclickRequiresOnKeypress = require('ScriptOnclickRequiresOnKeypress');
const ScriptOndblclickRequiresOnKeypress = require('ScriptOndblclickRequiresOnKeypress');
const ScriptOnmousedownRequiresOnKeypress = require('ScriptOnmousedownRequiresOnKeypress');
const ScriptOnmousemove = require('ScriptOnmousemove');
const ScriptOnmouseoutHasOnmouseblur = require('ScriptOnmouseoutHasOnmouseblur');
const ScriptOnmouseoverHasOnfocus = require('ScriptOnmouseoverHasOnfocus');
const ScriptOnmouseupHasOnkeyup = require('ScriptOnmouseupHasOnkeyup');
const SelectHasAssociatedLabel = require('SelectHasAssociatedLabel');
const SelectJumpMenu = require('SelectJumpMenu');
const SiteMap = require('SiteMap');
const SkipToContentLinkProvided = require('SkipToContentLinkProvided');
const SvgContainsTitle = require('SvgContainsTitle');
const TabIndexFollowsLogicalOrder = require('TabIndexFollowsLogicalOrder');
const TableAxisHasCorrespondingId = require('TableAxisHasCorrespondingId');
const TableDataShouldHaveTh = require('TableDataShouldHaveTh');
const TableLayoutDataShouldNotHaveTh = require('TableLayoutDataShouldNotHaveTh');
const TableLayoutHasNoCaption = require('TableLayoutHasNoCaption');
const TableLayoutHasNoSummary = require('TableLayoutHasNoSummary');
const TableLayoutMakesSenseLinearized = require('TableLayoutMakesSenseLinearized');
const TableNotUsedForLayout = require('TableNotUsedForLayout');
const TableShouldUseHeaderIDs = require('TableShouldUseHeaderIDs');
const TableSummaryDoesNotDuplicateCaption = require('TableSummaryDoesNotDuplicateCaption');
const TableSummaryIsEmpty = require('TableSummaryIsEmpty');
const TableSummaryIsNotTooLong = require('TableSummaryIsNotTooLong');
const TableUseColGroup = require('TableUseColGroup');
const TableUsesAbbreviationForHeader = require('TableUsesAbbreviationForHeader');
const TableUsesCaption = require('TableUsesCaption');
const TableUsesScopeForRow = require('TableUsesScopeForRow');
const TabularDataIsInTable = require('TabularDataIsInTable');
const TextIsNotSmall = require('TextIsNotSmall');
const TextareaHasAssociatedLabel = require('TextareaHasAssociatedLabel');
const VideoMayBePresent = require('VideoMayBePresent');
const VideosEmbeddedOrLinkedNeedCaptions = require('VideosEmbeddedOrLinkedNeedCaptions');
const WhiteSpaceInWord = require('WhiteSpaceInWord');
const WhiteSpaceNotUsedForFormatting = require('WhiteSpaceNotUsedForFormatting');

let AllTests = new Map();

AllTests.set('aAdjacentWithSameResourceShouldBeCombined', AAdjacentWithSameResourceShouldBeCombined);
AllTests.set('aImgAltNotRepetitive', AImgAltNotRepetitive);
AllTests.set('aInPHasADistinctStyle', AInPHasADistinctStyle);
AllTests.set('aLinkTextDoesNotBeginWithRedundantWord', ALinkTextDoesNotBeginWithRedundantWord);
AllTests.set('aLinkWithNonText', ALinkWithNonText);
AllTests.set('aLinksAreSeparatedByPrintableCharacters', ALinksAreSeparatedByPrintableCharacters);
AllTests.set('aLinksDontOpenNewWindow', ALinksDontOpenNewWindow);
AllTests.set('aLinksNotSeparatedBySymbols', ALinksNotSeparatedBySymbols);
AllTests.set('aLinksToMultiMediaRequireTranscript', ALinksToMultiMediaRequireTranscript);
AllTests.set('aLinksToSoundFilesNeedTranscripts', ALinksToSoundFilesNeedTranscripts);
AllTests.set('aMultimediaTextAlternative', AMultimediaTextAlternative);
AllTests.set('aMustContainText', AMustContainText);
AllTests.set('aMustHaveTitle', AMustHaveTitle);
AllTests.set('aMustNotHaveJavascriptHref', AMustNotHaveJavascriptHref);
AllTests.set('appletContainsTextEquivalent', AppletContainsTextEquivalent);
AllTests.set('appletContainsTextEquivalentInAlt', AppletContainsTextEquivalentInAlt);
AllTests.set('appletProvidesMechanismToReturnToParent', AppletProvidesMechanismToReturnToParent);
AllTests.set('appletTextEquivalentsGetUpdated', AppletTextEquivalentsGetUpdated);
AllTests.set('appletUIMustBeAccessible', AppletUIMustBeAccessible);
AllTests.set('appletsDoNotFlicker', AppletsDoNotFlicker);
AllTests.set('appletsDonotUseColorAlone', AppletsDonotUseColorAlone);
AllTests.set('aSuspiciousLinkText', ASuspiciousLinkText);
AllTests.set('aTitleDescribesDestination', ATitleDescribesDestination);
AllTests.set('animatedGifMayBePresent', AnimatedGifMayBePresent);
AllTests.set('areaAltIdentifiesDestination', AreaAltIdentifiesDestination);
AllTests.set('areaAltRefersToText', AreaAltRefersToText);
AllTests.set('areaDontOpenNewWindow', AreaDontOpenNewWindow);
AllTests.set('areaHasAltValue', AreaHasAltValue);
AllTests.set('areaLinksToSoundFile', AreaLinksToSoundFile);
AllTests.set('audioMayBePresent', AudioMayBePresent);
AllTests.set('basefontIsNotUsed', BasefontIsNotUsed);
AllTests.set('blinkIsNotUsed', BlinkIsNotUsed);
AllTests.set('blockquoteNotUsedForIndentation', BlockquoteNotUsedForIndentation);
AllTests.set('blockquoteUseForQuotations', BlockquoteUseForQuotations);
AllTests.set('boldIsNotUsed', BoldIsNotUsed);
AllTests.set('buttonHasName', ButtonHasName);
AllTests.set('checkboxHasLabel', CheckboxHasLabel);
AllTests.set('colorBackgroundGradientContrast', ColorBackgroundGradientContrast);
AllTests.set('colorBackgroundImageContrast', ColorBackgroundImageContrast);
AllTests.set('colorElementBehindBackgroundGradientContrast', ColorElementBehindBackgroundGradientContrast);
AllTests.set('colorElementBehindBackgroundImageContrast', ColorElementBehindBackgroundImageContrast);
AllTests.set('colorElementBehindContrast', ColorElementBehindContrast);
AllTests.set('colorFontContrast', ColorFontContrast);
AllTests.set('cssDocumentMakesSenseStyleTurnedOff', CssDocumentMakesSenseStyleTurnedOff);
AllTests.set('definitionListsAreUsed', DefinitionListsAreUsed);
AllTests.set('doctypeProvided', DoctypeProvided);
AllTests.set('documentAcronymsHaveElement', DocumentAcronymsHaveElement);
AllTests.set('documentAutoRedirectNotUsed', DocumentAutoRedirectNotUsed);
AllTests.set('documentContentReadableWithoutStylesheets', DocumentContentReadableWithoutStylesheets);
AllTests.set('documentHasTitleElement', DocumentHasTitleElement);
AllTests.set('documentIsWrittenClearly', DocumentIsWrittenClearly);
AllTests.set('documentLangIsISO639Standard', DocumentLangIsISO639Standard);
AllTests.set('documentLangNotIdentified', DocumentLangNotIdentified);
AllTests.set('documentMetaNotUsedWithTimeout', DocumentMetaNotUsedWithTimeout);
AllTests.set('documentReadingDirection', DocumentReadingDirection);
AllTests.set('documentStrictDocType', DocumentStrictDocType);
AllTests.set('documentTitleDescribesDocument', DocumentTitleDescribesDocument);
AllTests.set('documentTitleIsNotPlaceholder', DocumentTitleIsNotPlaceholder);
AllTests.set('documentTitleIsShort', DocumentTitleIsShort);
AllTests.set('documentTitleNotEmpty', DocumentTitleNotEmpty);
AllTests.set('documentVisualListsAreMarkedUp', DocumentVisualListsAreMarkedUp);
AllTests.set('domOrderMatchesVisualOrder', DomOrderMatchesVisualOrder);
AllTests.set('embedHasAssociatedNoEmbed', EmbedHasAssociatedNoEmbed);
AllTests.set('embedMustHaveAltAttribute', EmbedMustHaveAltAttribute);
AllTests.set('fieldsetHasLabel', FieldsetHasLabel);
AllTests.set('fileHasLabel', FileHasLabel);
AllTests.set('fontIsNotUsed', FontIsNotUsed);
AllTests.set('formButtonsHaveValue', FormButtonsHaveValue);
AllTests.set('formErrorMessageHelpsUser', FormErrorMessageHelpsUser);
AllTests.set('formHasGoodErrorMessage', FormHasGoodErrorMessage);
AllTests.set('formHasSubmitButton', FormHasSubmitButton);
AllTests.set('formWithRequiredLabel', FormWithRequiredLabel);
AllTests.set('headerH1', HeaderH1);
AllTests.set('headerH1Format', HeaderH1Format);
AllTests.set('headerH2', HeaderH2);
AllTests.set('headerH2Format', HeaderH2Format);
AllTests.set('headerH3', HeaderH3);
AllTests.set('headerH3Format', HeaderH3Format);
AllTests.set('headerH4', HeaderH4);
AllTests.set('headerH4Format', HeaderH4Format);
AllTests.set('headerH5Format', HeaderH5Format);
AllTests.set('headerH6Format', HeaderH6Format);
AllTests.set('headersAttrRefersToATableCell', HeadersAttrRefersToATableCell);
AllTests.set('headersHaveText', HeadersHaveText);
AllTests.set('headersUseToMarkSections', HeadersUseToMarkSections);
AllTests.set('iIsNotUsed', IIsNotUsed);
AllTests.set('idrefsHasCorrespondingId', IdrefsHasCorrespondingId);
AllTests.set('iframeMustNotHaveLongdesc', IframeMustNotHaveLongdesc);
AllTests.set('imageMapServerSide', ImageMapServerSide);
AllTests.set('imgAltIsDifferent', ImgAltIsDifferent);
AllTests.set('imgAltIsTooLong', ImgAltIsTooLong);
AllTests.set('imgAltNotEmptyInAnchor', ImgAltNotEmptyInAnchor);
AllTests.set('imgAltNotPlaceHolder', ImgAltNotPlaceHolder);
AllTests.set('imgHasAlt', ImgHasAlt);
AllTests.set('imgHasLongDesc', ImgHasLongDesc);
AllTests.set('imgImportantNoSpacerAlt', ImgImportantNoSpacerAlt);
AllTests.set('imgNonDecorativeHasAlt', ImgNonDecorativeHasAlt);
AllTests.set('imgServerSideMapNotUsed', ImgServerSideMapNotUsed);
AllTests.set('imgShouldNotHaveTitle', ImgShouldNotHaveTitle);
AllTests.set('imgWithMapHasUseMap', ImgWithMapHasUseMap);
AllTests.set('imgWithMathShouldHaveMathEquivalent', ImgWithMathShouldHaveMathEquivalent);
AllTests.set('inputCheckboxRequiresFieldset', InputCheckboxRequiresFieldset);
AllTests.set('inputElementsDontHaveAlt', InputElementsDontHaveAlt);
AllTests.set('inputImageAltIsNotFileName', InputImageAltIsNotFileName);
AllTests.set('inputImageAltIsNotPlaceholder', InputImageAltIsNotPlaceholder);
AllTests.set('inputImageAltIsShort', InputImageAltIsShort);
AllTests.set('inputImageAltNotRedundant', InputImageAltNotRedundant);
AllTests.set('inputImageHasAlt', InputImageHasAlt);
AllTests.set('inputTextHasLabel', InputTextHasLabel);
AllTests.set('inputTextHasValue', InputTextHasValue);
AllTests.set('inputTextValueNotEmpty', InputTextValueNotEmpty);
AllTests.set('inputWithoutLabelHasTitle', InputWithoutLabelHasTitle);
AllTests.set('labelDoesNotContainInput', LabelDoesNotContainInput);
AllTests.set('labelMustBeUnique', LabelMustBeUnique);
AllTests.set('labelMustNotBeEmpty', LabelMustNotBeEmpty);
AllTests.set('labelsAreAssignedToAnInput', LabelsAreAssignedToAnInput);
AllTests.set('languageDirAttributeIsUsed', LanguageDirAttributeIsUsed);
AllTests.set('languageDirectionPunctuation', LanguageDirectionPunctuation);
AllTests.set('languageUnicodeDirection', LanguageUnicodeDirection);
AllTests.set('legendTextNotEmpty', LegendTextNotEmpty);
AllTests.set('legendTextNotPlaceholder', LegendTextNotPlaceholder);
AllTests.set('liDontUseImageForBullet', LiDontUseImageForBullet);
AllTests.set('linkHasAUniqueContext', LinkHasAUniqueContext);
AllTests.set('listNotUsedForFormatting', ListNotUsedForFormatting);
AllTests.set('listOfLinksUseList', ListOfLinksUseList);
AllTests.set('marqueeIsNotUsed', MarqueeIsNotUsed);
AllTests.set('menuNotUsedToFormatText', MenuNotUsedToFormatText);
AllTests.set('newWindowIsOpened', NewWindowIsOpened);
AllTests.set('objectMustContainText', ObjectMustContainText);
AllTests.set('objectMustHaveEmbed', ObjectMustHaveEmbed);
AllTests.set('objectMustHaveTitle', ObjectMustHaveTitle);
AllTests.set('objectMustHaveValidTitle', ObjectMustHaveValidTitle);
AllTests.set('pNotUsedAsHeader', PNotUsedAsHeader);
AllTests.set('passwordHasLabel', PasswordHasLabel);
AllTests.set('preShouldNotBeUsedForTabularLayout', PreShouldNotBeUsedForTabularLayout);
AllTests.set('radioHasLabel', RadioHasLabel);
AllTests.set('scriptOnclickRequiresOnKeypress', ScriptOnclickRequiresOnKeypress);
AllTests.set('scriptOndblclickRequiresOnKeypress', ScriptOndblclickRequiresOnKeypress);
AllTests.set('scriptOnmousedownRequiresOnKeypress', ScriptOnmousedownRequiresOnKeypress);
AllTests.set('scriptOnmousemove', ScriptOnmousemove);
AllTests.set('scriptOnmouseoutHasOnmouseblur', ScriptOnmouseoutHasOnmouseblur);
AllTests.set('scriptOnmouseoverHasOnfocus', ScriptOnmouseoverHasOnfocus);
AllTests.set('scriptOnmouseupHasOnkeyup', ScriptOnmouseupHasOnkeyup);
AllTests.set('selectHasAssociatedLabel', SelectHasAssociatedLabel);
AllTests.set('selectJumpMenu', SelectJumpMenu);
AllTests.set('siteMap', SiteMap);
AllTests.set('skipToContentLinkProvided', SkipToContentLinkProvided);
AllTests.set('svgContainsTitle', SvgContainsTitle);
AllTests.set('tabIndexFollowsLogicalOrder', TabIndexFollowsLogicalOrder);
AllTests.set('tableAxisHasCorrespondingId', TableAxisHasCorrespondingId);
AllTests.set('tableDataShouldHaveTh', TableDataShouldHaveTh);
AllTests.set('tableLayoutDataShouldNotHaveTh', TableLayoutDataShouldNotHaveTh);
AllTests.set('tableLayoutHasNoCaption', TableLayoutHasNoCaption);
AllTests.set('tableLayoutHasNoSummary', TableLayoutHasNoSummary);
AllTests.set('tableLayoutMakesSenseLinearized', TableLayoutMakesSenseLinearized);
AllTests.set('tableNotUsedForLayout', TableNotUsedForLayout);
AllTests.set('tableShouldUseHeaderIDs', TableShouldUseHeaderIDs);
AllTests.set('tableSummaryDoesNotDuplicateCaption', TableSummaryDoesNotDuplicateCaption);
AllTests.set('tableSummaryIsEmpty', TableSummaryIsEmpty);
AllTests.set('tableSummaryIsNotTooLong', TableSummaryIsNotTooLong);
AllTests.set('tableUseColGroup', TableUseColGroup);
AllTests.set('tableUsesAbbreviationForHeader', TableUsesAbbreviationForHeader);
AllTests.set('tableUsesCaption', TableUsesCaption);
AllTests.set('tableUsesScopeForRow', TableUsesScopeForRow);
AllTests.set('tabularDataIsInTable', TabularDataIsInTable);
AllTests.set('textIsNotSmall', TextIsNotSmall);
AllTests.set('textareaHasAssociatedLabel', TextareaHasAssociatedLabel);
AllTests.set('videoMayBePresent', VideoMayBePresent);
AllTests.set('videosEmbeddedOrLinkedNeedCaptions', VideosEmbeddedOrLinkedNeedCaptions);
AllTests.set('whiteSpaceInWord', WhiteSpaceInWord);
AllTests.set('whiteSpaceNotUsedForFormatting', WhiteSpaceNotUsedForFormatting);

module.exports = AllTests;
