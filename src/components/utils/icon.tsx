import React from 'react';
import {IconName, IconPrefix, library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

interface IconProps {
	icon: [IconPrefix, IconName] | string;
}

const Icon: React.FC<IconProps> = ({ icon }) => {
	if (typeof icon === 'string') {
		return <i className={`devicon-${icon}-plain`} />;
	}
	
	const [iconType, iconKey] = icon;
	
	// Map missing icons to available ones
	const iconMap: Record<string, IconName> = {
		'circle-notch': 'spinner',
		'fingerprint': 'user-shield',
		'grid-2-plus': 'th',
		'laptop-code': 'laptop',
		'chart-network': 'project-diagram',
		'machinelearning': 'brain',
		'artificialintelligence': 'robot',
		'deeplearning': 'network-wired',
		'neuralnetworks': 'sitemap'
	};
	
	const mappedIcon = iconMap[iconKey] || iconKey;
	
	try {
		return <FontAwesomeIcon icon={[iconType as IconPrefix, mappedIcon as IconName]} />;
	} catch {
		return <FontAwesomeIcon icon={['fas', 'question']} />;
	}
};

export default Icon;
