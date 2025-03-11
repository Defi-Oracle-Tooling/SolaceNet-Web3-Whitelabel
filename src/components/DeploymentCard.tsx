import React from 'react';
import styles from '@/styles/DeploymentCard.module.css';

type DeploymentType = 'single' | 'multi' | 'hybrid';

type DeploymentCardProps = {
  type: DeploymentType;
  title: string;
  description: string;
  isSelected: boolean;
  onSelect: (type: DeploymentType) => void;
};

const DeploymentCard = ({
  type,
  title,
  description,
  isSelected,
  onSelect,
}: DeploymentCardProps) => {
  return (
    <div 
      className={`${styles.card} ${isSelected ? styles.selected : ''}`}
      onClick={() => onSelect(type)}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      {isSelected && (
        <div className={styles.selectedIndicator}>
          <span>✓</span>
        </div>
      )}
    </div>
  );
};

export default DeploymentCard;
