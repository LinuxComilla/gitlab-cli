function issues(issue)
{
  var out = '#' + issue.id;
  if (issue.state) {
    out += ' ('+ issue.state + ')';
  }

  out +=  ': ' + issue.title;

  if (issue.description) {
    out += '\n' + issue.description;
  }

  if (issue.labels && issue.labels.length > 0) {
    out += '\n\nLabels: ' + issue.labels.join(', ');
  }
  return  out;
}
module.exports.issues = issues;


function milestones(milestone)
{
  var out = '#' + milestone.id;
  if (milestone.state) {
    out += ' ('+ milestone.state + ')';
  }

  out +=  ': ' + milestone.title;

  if (milestone.due_date) {
    out += ' (' + milestone.due_date + ')';
  }

  if (milestone.description) {
    out += '\n' + milestone.description;
  }
  return  out;
}
module.exports.milestones = milestones;


function users(user)
{
  var out = '#' + user.id;
  if (user.state) {
    out += ' ('+ user.state + ')';
  }

  out +=  ': ' + user.username + ' | ' + user.email;

  out += '\n';

  out += 'Role: ';
  switch (user.access_level) {
    case 10: out += 'Guest'; break;
    case 20: out += 'Reporter'; break;
    case 30: out += 'Developer'; break;
    case 40: out += 'Master'; break;
  }


  if (user.name) {
    out += ' | Name: ' + user.name;
  }

  return  out;
}
module.exports.users = users;
module.exports.members = users;


function projects(project)
{
  var out = '#' + project.id;


  out += ' (' + ((project.public) ? 'public' : 'private') + ')';

  out += ': ' + project.name;

  if (project.description) {
    out += '\n' + project.description;
  }
  out += '\n' + 'path: ' + project.path_with_namespace;
  out += '\n' + 'ssh: ' + project.ssh_url_to_repo;
  out += '\n' + 'http: ' + project.http_url_to_repo;
  out += '\n' + 'web: ' + project.web_url;

  return out;
}
module.exports.projects = projects;

function hooks(hook)
{
  var out = '#' + hook.id;

  var date = new Date(hook.created_at);
  out += ' (' + date + ')';
  out += ': ' + hook.url;

  return out;
}
module.exports.hooks = hooks;