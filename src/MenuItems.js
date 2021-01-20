const MenuItems = {
  Projects: [
    {
      name: "Ambulatory Organizer",
      owner: "Casey Rolf",
      codeRepositories: [{
        name: "Github - Frontend",
        url: "https://github.cerner.com/phys-dev/pex_ng_amb_org"
      },
      {
        name: "SVN - CCL",
        url: "http://scm.physexp.cerner.corp/svn/com.cerner.physexp.program/trunk/"
      }],
      jira: "https://jira2.cerner.com/projects/AMBORG/"
    },
    {
      name: "Orion Patient Handoff Engine (Ruby)",
      owner: "Ryan Cross",
      codeRepositories: [{
        name: "Github - Frontend",
        url: "https://github.cerner.com/phys-dev/ion_patient_handoff_engine"
      }],
      jira: "https://jira2.cerner.com/projects/IPASS/"
    }
  ]
};
export default MenuItems;
