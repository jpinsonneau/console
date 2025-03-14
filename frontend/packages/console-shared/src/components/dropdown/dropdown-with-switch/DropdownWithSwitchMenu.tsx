import * as React from 'react';
import {
  Divider,
  Menu,
  MenuContent,
  MenuSearch,
  Switch,
  MenuSearchInput,
} from '@patternfly/react-core';
import DropdownWithSwitchGroups, { DropdownWithSwitchGroup } from './DropdownWithSwitchGroups';

const DropdownWithSwitchMenu: React.FC<DropdownWithSwitchMenuProps> = ({
  menuRef,
  onSelect,
  options,
  selected,
  setOpen,
  switchIsChecked,
  switchIsDisabled,
  switchLabel,
  switchLabelClassName,
  switchLabelIsReversed,
  switchOnChange,
}) => {
  return (
    <Menu
      activeItemId={selected}
      isScrollable
      onSelect={(event: React.MouseEvent, itemId: string) => {
        onSelect(event, itemId);
        setOpen(false);
      }}
      ref={menuRef}
      style={{ position: 'absolute', zIndex: 100 }}
    >
      <MenuContent>
        <MenuSearch>
          <MenuSearchInput>
            <Switch
              className={switchLabelClassName}
              isChecked={switchIsChecked}
              isDisabled={switchIsDisabled}
              isReversed={switchLabelIsReversed}
              label={switchLabel}
              onChange={(_event, value) => switchOnChange(value)}
              data-test="dropdown-with-switch-switch"
            />
          </MenuSearchInput>
        </MenuSearch>
        <Divider />
        <DropdownWithSwitchGroups options={options} selectedKey={selected} />
      </MenuContent>
    </Menu>
  );
};

type DropdownWithSwitchMenuProps = {
  menuRef: React.MutableRefObject<HTMLDivElement>;
  onSelect: (event: React.MouseEvent, itemId: string) => void;
  options: DropdownWithSwitchGroup[];
  selected?: string;
  setOpen: (isOpen: boolean) => void;
  switchIsChecked: boolean;
  switchIsDisabled?: boolean;
  switchLabelIsReversed?: boolean;
  switchLabel?: React.ReactNode;
  switchLabelClassName?: string;
  switchLabelOff?: React.ReactNode;
  switchOnChange: (isChecked: boolean) => void;
};

export default DropdownWithSwitchMenu;
