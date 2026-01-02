import { BaseItemKind } from '@jellyfin/sdk/lib/generated-client/models/base-item-kind';
import React, { FC } from 'react';
import useCurrentTab from 'hooks/useCurrentTab';
import Page from 'components/Page';
import PageTabContent from '../../components/library/PageTabContent';
import { LibraryTab } from 'types/libraryTab';
import { LibraryTabContent, LibraryTabMapping } from 'types/libraryTabContent';

// Note: 'games' is a custom collection type added to our fork
// The itemType uses 'Game' as a string since BaseItemKind.Game may not exist in the SDK yet
const gamesTabContent: LibraryTabContent = {
    viewType: LibraryTab.Games,
    collectionType: 'games' as any,
    isBtnPlayAllEnabled: false,
    isBtnShuffleEnabled: false,
    isBtnFilterEnabled: true,
    isBtnGridListEnabled: true,
    itemType: ['Game' as unknown as BaseItemKind]
};

const favoritesTabContent: LibraryTabContent = {
    viewType: LibraryTab.Favorites,
    collectionType: 'games' as any,
    itemType: ['Game' as unknown as BaseItemKind]
};

const genresTabContent: LibraryTabContent = {
    viewType: LibraryTab.Genres,
    collectionType: 'games' as any,
    itemType: ['Game' as unknown as BaseItemKind]
};

const gamesTabMapping: LibraryTabMapping = {
    0: gamesTabContent,
    1: favoritesTabContent,
    2: genresTabContent
};

const Games: FC = () => {
    const { libraryId, activeTab } = useCurrentTab();
    const currentTab = gamesTabMapping[activeTab];

    return (
        <Page
            id='gamesPage'
            className='mainAnimatedPage libraryPage backdropPage collectionEditorPage pageWithAbsoluteTabs withTabs'
            backDropType='game'
        >
            <PageTabContent
                key={`${currentTab.viewType} - ${libraryId}`}
                currentTab={currentTab}
                parentId={libraryId}
            />
        </Page>
    );
};

export default Games;
