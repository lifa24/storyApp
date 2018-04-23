const moment = require("moment");

module.exports = {
  truncate: function(str, len) {
    if (str.length > len && str.length > 0) {
      let new_str = str + " ";
      new_str = str.substr(0, len);
      new_str = str.substr(0, new_str.lastIndexOf(" "));
      new_str = new_str.length > 0 ? new_str : str.substr(0, len);
      return new_str + "...";
    }
    return str;
  },

  stripTags: function(input) {
    return input.replace(/<(?:.|\n)*?>/gm, "");
  },

  formatDate: function(date, format) {
    return moment(date).format(format);
  },

  select: function(selected, option) {
    return option
      .fn(this)
      .replace(
        new RegExp(' value="' + selected + '"'),
        '$&selected="seslected"'
      )
      .replace(new RegExp(">" + selected + "</option>"), 'selected="selected"');
  },
  editIcon: function(storyUser, loggedUser, storyId, floating = true) {
    if (storyUser == loggedUser) {
      if (floating) {
        return `<a href="/stories/edit/${storyId}" class="btn btn-floating halfway-fab red"><i class="fa fa-pencil"></i></a>`;
      } else {
        return `<a href="/stories/edit/${storyId}"><i class="fa fa-pencil"></i></a>`;
      }
    } else {
      return "";
    }
  }
};
