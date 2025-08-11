const LanguageBadge = ({ language }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
    {language.display}
  </span>
);

export default LanguageBadge;