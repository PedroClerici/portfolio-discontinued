import React, { useState } from 'react';
import { Link, useI18next, useTranslation } from 'gatsby-plugin-react-i18next';

import Icon from '@components/Icons';

import * as styles from './LangSelector.module.scss';

const LangSelector = () => {
  const { t } = useTranslation();
  const { language, changeLanguage } = useI18next();

  const languages = [
    { id: 'en', title: t('English') },
    { id: 'pt', title: t('Portuguese') },
  ];

  const getLanguageTitle = (id: string) => {
    const language = languages.find((language) => language.id == id);
    return language?.title;
  };

  return (
    <button className={styles.langSelector}>
      {getLanguageTitle(language)}
      <Icon name="Arrow" />
      <div className={styles.dropdown}>
        {languages
          .filter((languageFiltered) => languageFiltered.id !== language)
          .map((language) => (
            <a onClick={() => changeLanguage(language.id)}>{language.title}</a>
          ))}
      </div>
    </button>
  );
};

export default LangSelector;
