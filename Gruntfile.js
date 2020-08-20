const loadGruntTasks = require("load-grunt-tasks");
const {readFileSync} = require("fs");

const BUILD_DIR = "lib";
const LICENSE_FILE = "LICENSE";

const getLicenseHeader = () => {
  const licenseText = readFileSync(LICENSE_FILE, "utf8").trim();
  return [
    "/*!",
    " * @preserve",
    " * @license",
    ...licenseText.split("\n").map(line => ` * ${line.trim()}`),
    " */",
  ].join("\n");
};

module.exports = grunt => {
  loadGruntTasks(grunt);
  grunt.initConfig({
    clean: {
      build: [
        BUILD_DIR,
        "*.tsbuildinfo",
      ],
    },
    ts: {build: {tsconfig: "./tsconfig.json"}},
    usebanner: {
      build: {
        options: {banner: getLicenseHeader()},
        files: [
          {
            expand: true,
            cwd: BUILD_DIR,
            src: ["**/*.js"],
          },
        ],
      },
    },
  });

  grunt.registerTask(
    "build",
    "Build the library for release",
    [
      "ts:build",
      "usebanner:build",
    ],
  );

  grunt.registerTask(
    "default",
    "build",
  );
};
