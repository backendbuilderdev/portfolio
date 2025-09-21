import React, {useEffect, useState} from 'react';
import {IconName, IconPrefix, library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';

// Icons
library.add(fab, fas);

interface IconProps {
	icon: [IconPrefix, IconName];
}

const Icon: React.FC<IconProps> = ({ icon }) => {
	const [iconType, iconKey] = icon;
	const [stateIconKey, setIconKey] = useState<IconName>('circle-notch');

	useEffect(() => {
		setIconKey(iconKey as IconName);
	}, [iconKey]);

	return <FontAwesomeIcon icon={[iconType as IconPrefix, stateIconKey]} />;
};

export default Icon;
