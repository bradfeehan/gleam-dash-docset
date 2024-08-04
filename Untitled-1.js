// const pageTitle = $("title").text();
// dashDoc.addEntry({name: pageTitle, type: "Guide"});

function processModuleMembers(moduleKind, entryType) {
  const moduleHeadingSelector = 'h1.module-member-kind#module-' + moduleKind
  const moduleSection = $(moduleHeadingSelector).first().parent();
  moduleSection.find(".member .member-name h2").each(function () {
    const entryName = $(this).text();
    const entryHash = $(this).attr('id');

    if (entryHash) {
      dashDoc.addEntry({ name: entryName, type: entryType, hash: entryHash });
    }
  });
}

// The main h1 at the top of every module page
$("main.content h1#module-name").first().each(function () {
  const entryName = $(this).text();
  dashDoc.addEntry({ name: entryName, type: "Module", hash: "module-name" });

  processModuleMembers("types", "Type")
  processModuleMembers("functions", "Function")
});
