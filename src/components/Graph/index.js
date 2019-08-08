import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import ReactCircularGraph from 'react-circular-graph';
import Circular from '../Circular';
import { isProjectChanged, CanvasData} from '../../actions/graph'
import './index.scss'

var config = {
  "ENABLE_ERROR_REPORTING": true,
  "LIST_PAGE_SIZE": 48,
  "EXPLORE_PAGE_SIZE": 80,
  "MOBILE_WIDTH": 720,
  "COLORS": {
    "GREEN": "#34A853",
    "RED": "#EA4335",
    "BLUE": "#4285F4",
    "YELLOW": "#FBBC05"
  }
}

var data = [
  {
    "id": "sketch-rtl",
    "name": "RTL Sketch Plugin",
    "summary": "Automatically create RTL layouts of your designs with this plugin for Bohemian Coding's Sketch 3",
    "startsWith": "r",
    "fallbackColor": "#4285F4",
    "RGB": {
      "r": 66,
      "g": 133,
      "b": 244
    }
  },
  {
    "id": "certificate-transparency",
    "name": "Certificate Transparency",
    "summary": "A framework for monitoring and auditing SSL certificates in nearly real time",
    "iconUrlSmall": "https://www.gstatic.com/opensource/project-images/certificate-transparency/logo.png?rs=AGWjSYTULdv_8I5cYqg5g-_OwdB-YI2Leg&sqp=-oaymwEICEwQTCAAUAEI3M-MygU",
    "iconUrlMedium": "https://www.gstatic.com/opensource/project-images/certificate-transparency/logo.png?rs=AGWjSYS71O6krdCVrIkQFrjZcyQLwJaLOQ&sqp=-oaymwEKCIwBEIwBIABQAQjcz4zKBQ",
    "primaryColor": "#181C1D",
    "startsWith": "c",
    "fallbackColor": "#4285F4",
    "RGB": {
      "r": 24,
      "g": 28,
      "b": 29
    }
  },
  {
    "id": "go",
    "name": "Go",
    "summary": "Go is an open source programming language that makes it easy to build simple, reliable, and efficient software",
    "iconUrlSmall": "https://www.gstatic.com/opensource/project-images/go/logo.png?rs=AGWjSYQIri4x-kAIlXKHB1dV2JvRjfAMaw&sqp=-oaymwEICEwQTCAAUAEIyaPvzwU",
    "iconUrlMedium": "https://www.gstatic.com/opensource/project-images/go/logo.png?rs=AGWjSYSM2HrXhFKt45UThyUQcH12FiHb4A&sqp=-oaymwEKCIwBEIwBIABQAQjJo-_PBQ",
    "primaryColor": "#6FD6E2",
    "startsWith": "g",
    "fallbackColor": "#FBBC05",
    "RGB": {
      "r": 111,
      "g": 214,
      "b": 226
    }
  },
  {
    "id": "boringssl",
    "name": "BoringSSL",
    "summary": "A fork of OpenSSL used to implement cryptography and TLS across most of Google's products",
    "iconUrlSmall": "https://www.gstatic.com/opensource/project-images/boringssl/logo.png?rs=AGWjSYSQZ8Jv8RPkEUJ-LMOTPn7a-FmeyA&sqp=-oaymwEICEwQTCAAUAEIxc-MygU",
    "iconUrlMedium": "https://www.gstatic.com/opensource/project-images/boringssl/logo.png?rs=AGWjSYSEPrTRB72-vV8kLoK6OvdxwtWKvQ&sqp=-oaymwEKCIwBEIwBIABQAQjFz4zKBQ",
    "primaryColor": "#6B4B9F",
    "startsWith": "b",
    "fallbackColor": "#4285F4",
    "RGB": {
      "r": 107,
      "g": 75,
      "b": 159
    }
  },
  {
    "id": "dart",
    "name": "Dart",
    "summary": "Dart is a language designed to be productive, stable, and free of surprises",
    "iconUrlSmall": "https://www.gstatic.com/opensource/project-images/dart/logo.png?rs=AGWjSYQJDrA7Y_mFAt8WJWSRuJLvWv0OVw&sqp=-oaymwEICEwQTCAAUAEI6M-MygU",
    "iconUrlMedium": "https://www.gstatic.com/opensource/project-images/dart/logo.png?rs=AGWjSYTwt-Si12dEHIA4D5KpYxR3pwK82g&sqp=-oaymwEKCIwBEIwBIABQAQjoz4zKBQ",
    "primaryColor": "#13D5BD",
    "startsWith": "d",
    "fallbackColor": "#FBBC05",
    "RGB": {
      "r": 19,
      "g": 213,
      "b": 189
    }
  },
  {
    "id": "easypki",
    "name": "Easy Public Key Infrastructure",
    "summary": "A simplified Public Key Infrastructure management tool",
    "startsWith": "e",
    "fallbackColor": "#FBBC05",
    "RGB": {
      "r": 251,
      "g": 188,
      "b": 5
    }
  },
  {
    "id": "snazzymaps-browser",
    "name": "Snazzymaps Browser",
    "summary": "Android app for searching and browsing Snazzy Maps",
    "startsWith": "s",
    "fallbackColor": "#34A853",
    "RGB": {
      "r": 52,
      "g": 168,
      "b": 83
    }
  },
  {
    "id": "crouton",
    "name": "crouton",
    "summary": "Chromium OS Universal Chroot Environment",
    "iconUrlSmall": "https://www.gstatic.com/opensource/project-images/crouton/logo.svg",
    "iconUrlMedium": "https://www.gstatic.com/opensource/project-images/crouton/logo.svg",
    "primaryColor": "#696969",
    "startsWith": "c",
    "fallbackColor": "#EA4335",
    "RGB": {
      "r": 105,
      "g": 105,
      "b": 105
    }
  },
  {
    "id": "fontview",
    "name": "FontView",
    "summary": "A demo app that displays fonts using a free/libre/open-source text rendering stack",
    "startsWith": "f",
    "fallbackColor": "#FBBC05",
    "RGB": {
      "r": 251,
      "g": 188,
      "b": 5
    }
  },
  {
    "id": "tesseract",
    "name": "Tesseract OCR",
    "summary": "An optical character recognition (OCR) engine",
    "startsWith": "t",
    "fallbackColor": "#EA4335",
    "RGB": {
      "r": 234,
      "g": 67,
      "b": 53
    }
  },
  {
    "id": "blockly",
    "name": "Blockly",
    "summary": "Open source library for adding drag and drop block coding to apps",
    "iconUrlSmall": "https://www.gstatic.com/opensource/project-images/blockly/logo.png?rs=AGWjSYTGPO0FZ9DGwonoYZPveYa0ynIyRQ&sqp=-oaymwEICEwQTCAAUAEIwMCU3gU",
    "iconUrlMedium": "https://www.gstatic.com/opensource/project-images/blockly/logo.png?rs=AGWjSYRV0sNg8IhMgM5ugZ2Nj9SaHIL66Q&sqp=-oaymwEKCIwBEIwBIABQAQjAwJTeBQ",
    "primaryColor": "#81A8E6",
    "startsWith": "b",
    "fallbackColor": "#34A853",
    "RGB": {
      "r": 129,
      "g": 168,
      "b": 230
    }
  },
  {
    "id": "syntaxnet",
    "name": "SyntaxNet",
    "summary": "A TensorFlow based NLU toolkit",
    "startsWith": "s",
    "fallbackColor": "#EA4335",
    "RGB": {
      "r": 234,
      "g": 67,
      "b": 53
    }
  },
  {
    "id": "science-journal-arduino",
    "name": "science-journal-arduino",
    "summary": "Science Journal Arduino Firmware",
    "startsWith": "s",
    "fallbackColor": "#EA4335",
    "RGB": {
      "r": 234,
      "g": 67,
      "b": 53
    }
  },
  {
    "id": "agera",
    "name": "Agera",
    "summary": "Reactive Programming for Android",
    "iconUrlSmall": "https://www.gstatic.com/opensource/project-images/agera/logo.png?rs=AGWjSYQPQyGM5oGxGN3oBBrThh3LjpLT4A&sqp=-oaymwEICEwQTCAAUAEI3M2MygU",
    "iconUrlMedium": "https://www.gstatic.com/opensource/project-images/agera/logo.png?rs=AGWjSYRhzI3zIsn6nt3xUBGtum6_ko91og&sqp=-oaymwEKCIwBEIwBIABQAQjczYzKBQ",
    "primaryColor": "#b3278a",
    "startsWith": "a",
    "fallbackColor": "#34A853",
    "RGB": {
      "r": 179,
      "g": 39,
      "b": 138
    }
  },
  {
    "id": "polymer",
    "name": "Polymer",
    "summary": "A lightweight library built on top of the Web Components standard",
    "iconUrlSmall": "https://www.gstatic.com/opensource/project-images/polymer/logo.png?rs=AGWjSYSsxFF_0G18_1F3SriWJl_lesqN5w&sqp=-oaymwEICEwQTCAAUAEIptCMygU",
    "iconUrlMedium": "https://www.gstatic.com/opensource/project-images/polymer/logo.png?rs=AGWjSYQXJyxg-xk4g0c4vsKM29S6uyXRYw&sqp=-oaymwEKCIwBEIwBIABQAQim0IzKBQ",
    "primaryColor": "#337FCC",
    "startsWith": "p",
    "fallbackColor": "#FBBC05",
    "RGB": {
      "r": 51,
      "g": 127,
      "b": 204
    }
  },
  {
    "id": "android",
    "name": "Android",
    "summary": "An operating system for a wide range of devices",
    "iconUrlSmall": "https://www.gstatic.com/opensource/project-images/android/logo.png?rs=AGWjSYRXr3HTiuFOt8WbU11Z6Z5N5LaGHA&sqp=-oaymwEICEwQTCAAUAEIls6MygU",
    "iconUrlMedium": "https://www.gstatic.com/opensource/project-images/android/logo.png?rs=AGWjSYQm0KiD6oVf3pyh_OVY14Jlw0BLrw&sqp=-oaymwEKCIwBEIwBIABQAQiWzozKBQ",
    "primaryColor": "#A7C640",
    "startsWith": "a",
    "fallbackColor": "#EA4335",
    "RGB": {
      "r": 167,
      "g": 198,
      "b": 64
    }
  },
  {
    "id": "ndprbrd",
    "name": "ndprbrd",
    "summary": "NDP Routing Bridge Daemon",
    "startsWith": "n",
    "fallbackColor": "#4285F4",
    "RGB": {
      "r": 66,
      "g": 133,
      "b": 244
    }
  },
  {
    "id": "hilbert",
    "name": "Hilbert",
    "summary": "Go package for mapping values to and from space-filling curves, such as Hilbert and Peano curves",
    "iconUrlSmall": "https://www.gstatic.com/opensource/project-images/hilbert/logo.png?rs=AGWjSYQ2MN7owHqLRAPjm5O5NIp_Own6Zg&sqp=-oaymwEICEwQTCAAUAEIhdCMygU",
    "iconUrlMedium": "https://www.gstatic.com/opensource/project-images/hilbert/logo.png?rs=AGWjSYQTqu_WI9fJNCPEfK1BCBICs6TMgw&sqp=-oaymwEKCIwBEIwBIABQAQiF0IzKBQ",
    "primaryColor": "#323232",
    "startsWith": "h",
    "fallbackColor": "#EA4335",
    "RGB": {
      "r": 50,
      "g": 50,
      "b": 50
    }
  },
  {
    "id": "prob.js",
    "name": "Prob.js",
    "summary": "Generate random numbers from different probability distributions",
    "startsWith": "p",
    "fallbackColor": "#34A853",
    "RGB": {
      "r": 52,
      "g": 168,
      "b": 83
    }
  },
  {
    "id": "magenta",
    "name": "Magenta",
    "summary": "Magenta: Music and Art Generation with Machine Intelligence",
    "iconUrlSmall": "https://www.gstatic.com/opensource/project-images/magenta/logo.png?rs=AGWjSYS_R9U5smHKuwxxuan1_I5Fw4Htqg&sqp=-oaymwEICEwQTCAAUAEIq-ep0wU",
    "iconUrlMedium": "https://www.gstatic.com/opensource/project-images/magenta/logo.png?rs=AGWjSYQlWMmya8kAkF-qoTFOZzQjdH0GBA&sqp=-oaymwEKCIwBEIwBIABQAQir56nTBQ",
    "primaryColor": "#06213C",
    "startsWith": "m",
    "fallbackColor": "#34A853",
    "RGB": {
      "r": 6,
      "g": 33,
      "b": 60
    }
  },
  {
    "id": "angular",
    "name": "Angular",
    "summary": "A web application framework for mobile, desktop, and web",
    "iconUrlSmall": "https://www.gstatic.com/opensource/project-images/angular/logo.svg",
    "iconUrlMedium": "https://www.gstatic.com/opensource/project-images/angular/logo.svg",
    "startsWith": "a",
    "fallbackColor": "#FBBC05",
    "RGB": {
      "r": 251,
      "g": 188,
      "b": 5
    }
  },
  {
    "id": "cameraview",
    "name": "CameraView",
    "summary": "CameraView helps Android developers easily integrate Camera features",
    "startsWith": "c",
    "fallbackColor": "#34A853",
    "RGB": {
      "r": 52,
      "g": 168,
      "b": 83
    }
  },
  {
    "id": "flexbox-layout",
    "name": "flexbox-layout",
    "summary": "Flexbox for Android",
    "startsWith": "f",
    "fallbackColor": "#FBBC05",
    "RGB": {
      "r": 251,
      "g": 188,
      "b": 5
    }
  },
  {
    "id": "bazel",
    "name": "Bazel",
    "summary": "Google's build system for fast and correct builds",
    "iconUrlSmall": "https://www.gstatic.com/opensource/project-images/bazel/logo.svg",
    "iconUrlMedium": "https://www.gstatic.com/opensource/project-images/bazel/logo.svg",
    "primaryColor": "#43A047",
    "startsWith": "b",
    "fallbackColor": "#FBBC05",
    "RGB": {
      "r": 67,
      "g": 160,
      "b": 71
    }
  },
  {
    "id": "noto",
    "name": "Noto Fonts",
    "summary": "Fonts aiming to support all languages with a harmonious look and feel",
    "startsWith": "n",
    "fallbackColor": "#34A853",
    "RGB": {
      "r": 52,
      "g": 168,
      "b": 83
    }
  },
  {
    "id": "fontdiff",
    "name": "FontDiff",
    "summary": "A tool for finding visual differences between font versions",
    "startsWith": "f",
    "fallbackColor": "#FBBC05",
    "RGB": {
      "r": 251,
      "g": 188,
      "b": 5
    }
  },
  {
    "id": "mail-importer",
    "name": "Mail Importer for Gmail",
    "summary": "Mail Importer for Gmail will upload the contents of a Thunderbird mail archive to Gmail and do its best to preserve the read state, flagged state, and folders of the messages",
    "startsWith": "m",
    "fallbackColor": "#EA4335",
    "RGB": {
      "r": 234,
      "g": 67,
      "b": 53
    }
  },
  {
    "id": "cas-eval",
    "name": "Clicks-Attention-Satisfaction Evaluation Model and Metric",
    "summary": "A collection of components to collect data and train a user model and a corresponding search engine result page evaluation metric",
    "startsWith": "c",
    "fallbackColor": "#34A853",
    "RGB": {
      "r": 52,
      "g": 168,
      "b": 83
    }
  },
  {
    "id": "ssh-scripts",
    "name": "ssh-scripts",
    "summary": "Some SSH-related scripts",
    "startsWith": "s",
    "fallbackColor": "#EA4335",
    "RGB": {
      "r": 234,
      "g": 67,
      "b": 53
    }
  },
  {
    "id": "moe",
    "name": "MOE: Make Open Easy",
    "summary": "Synchronizes, translates, and scrubs source code repositories",
    "startsWith": "m",
    "fallbackColor": "#FBBC05",
    "RGB": {
      "r": 251,
      "g": 188,
      "b": 5
    }
  },
  {
    "id": "end-to-end",
    "name": "End-To-End",
    "summary": "End-To-End is a Chrome extension that helps you encrypt, decrypt, digitally sign, and verify signed messages within the browser using OpenPGP",
    "iconUrlSmall": "https://www.gstatic.com/opensource/project-images/end-to-end/logo.png?rs=AGWjSYS32piV518oS_phcX2uRW8HgXSxdg&sqp=-oaymwEICEwQTCAAUAEI7M-MygU",
    "iconUrlMedium": "https://www.gstatic.com/opensource/project-images/end-to-end/logo.png?rs=AGWjSYQ9eAxVcxhiHocbr1EcP5nTDGduGA&sqp=-oaymwEKCIwBEIwBIABQAQjsz4zKBQ",
    "primaryColor": "#333332",
    "startsWith": "e",
    "fallbackColor": "#EA4335",
    "RGB": {
      "r": 51,
      "g": 51,
      "b": 50
    }
  },
  {
    "id": "error-prone",
    "name": "Error Prone",
    "summary": "A bug detection tool for Java code, integrated into the Java compiler",
    "startsWith": "e",
    "fallbackColor": "#34A853",
    "RGB": {
      "r": 52,
      "g": 168,
      "b": 83
    }
  },
  {
    "id": "radioreceiver",
    "name": "Radio Receiver",
    "summary": "An application to listen to broadcast stereo FM and AM radio from your Chrome browser or your ChromeBook computer using a $15 USB digital TV tuner",
    "iconUrlSmall": "https://www.gstatic.com/opensource/project-images/radioreceiver/logo.png?rs=AGWjSYR5aGEUDKkGoJTfE9Tqs9m4-iqA5g&sqp=-oaymwEICEwQTCAAUAEIrNCMygU",
    "iconUrlMedium": "https://www.gstatic.com/opensource/project-images/radioreceiver/logo.png?rs=AGWjSYTiwctcKz_hTEJjKsKGc4V9wvg4uA&sqp=-oaymwEKCIwBEIwBIABQAQis0IzKBQ",
    "primaryColor": "#AA7522",
    "startsWith": "r",
    "fallbackColor": "#34A853",
    "RGB": {
      "r": 170,
      "g": 117,
      "b": 34
    }
  },
  {
    "id": "go-github",
    "name": "go-github",
    "summary": "Go library for accessing the GitHub API",
    "startsWith": "g",
    "fallbackColor": "#EA4335",
    "RGB": {
      "r": 234,
      "g": 67,
      "b": 53
    }
  },
  {
    "id": "copybara",
    "name": "Copybara",
    "summary": "A tool for transforming and moving code between repositories",
    "iconUrlSmall": "https://www.gstatic.com/opensource/project-images/copybara/logo.png?rs=AGWjSYRcqYtpQLzsmUpelNOd4jWPafqXyQ&sqp=-oaymwEICEwQTCAAUAEI58-MygU",
    "iconUrlMedium": "https://www.gstatic.com/opensource/project-images/copybara/logo.png?rs=AGWjSYQxeK8CMbsyVMQwoMvbr55ShrUBVA&sqp=-oaymwEKCIwBEIwBIABQAQjnz4zKBQ",
    "primaryColor": "#41929D",
    "startsWith": "c",
    "fallbackColor": "#EA4335",
    "RGB": {
      "r": 65,
      "g": 146,
      "b": 157
    }
  },
  {
    "id": "three-things-today",
    "name": "three-things-today",
    "summary": "Simple Android application to encourage writing down three things that happened today",
    "startsWith": "t",
    "fallbackColor": "#34A853",
    "RGB": {
      "r": 52,
      "g": 168,
      "b": 83
    }
  },
  {
    "id": "python-fanotify",
    "name": "fanotify Bindings for Python",
    "summary": "Python bindings for Linux's fanotify API",
    "startsWith": "f",
    "fallbackColor": "#4285F4",
    "RGB": {
      "r": 66,
      "g": 133,
      "b": 244
    }
  },
  {
    "id": "zopfli",
    "name": "Zopfli",
    "summary": "Zopfli is a compression library designed to be very good, but slow",
    "startsWith": "z",
    "fallbackColor": "#34A853",
    "RGB": {
      "r": 52,
      "g": 168,
      "b": 83
    }
  },
  {
    "id": "nomulus",
    "name": "Nomulus",
    "summary": "Top-level domain name registry software on Google Cloud Platform",
    "iconUrlSmall": "https://www.gstatic.com/opensource/project-images/nomulus/logo.png?rs=AGWjSYShX8xJaBTRRdVIqKbNOCR-6TH4vg&sqp=-oaymwEICEwQTCAAUAEIltCMygU",
    "iconUrlMedium": "https://www.gstatic.com/opensource/project-images/nomulus/logo.png?rs=AGWjSYSvdDD51Hnwtd2UelbayJHC3BNqoQ&sqp=-oaymwEKCIwBEIwBIABQAQiW0IzKBQ",
    "primaryColor": "#394A4A",
    "startsWith": "n",
    "fallbackColor": "#FBBC05",
    "RGB": {
      "r": 57,
      "g": 74,
      "b": 74
    }
  },
  {
    "id": "airport",
    "name": "Airport Puzzle Solver",
    "summary": "Visual puzzle solver for Smartgames 'Airport' puzzle",
    "iconUrlSmall": "https://www.gstatic.com/opensource/project-images/airport/logo.png?rs=AGWjSYQEhNrDqJwQcitPNDUV_eHGJXJTyQ&sqp=-oaymwEICEwQTCAAUAEI3c2MygU",
    "iconUrlMedium": "https://www.gstatic.com/opensource/project-images/airport/logo.png?rs=AGWjSYQMTJ6LKWb9BNQMCm3AQdFSXuuJUw&sqp=-oaymwEKCIwBEIwBIABQAQjdzYzKBQ",
    "primaryColor": "#DDCEC5",
    "startsWith": "a",
    "fallbackColor": "#FBBC05",
    "RGB": {
      "r": 221,
      "g": 206,
      "b": 197
    }
  },
  {
    "id": "touchtime",
    "name": "TouchTime",
    "summary": "Tells the time through vibration patterns on an Android smartwatch",
    "iconUrlSmall": "https://www.gstatic.com/opensource/project-images/touchtime/logo.png?rs=AGWjSYR3eUmDyzerjM2qv6k-BnS1Jb8dLA&sqp=-oaymwEICEwQTCAAUAEIt9CMygU",
    "iconUrlMedium": "https://www.gstatic.com/opensource/project-images/touchtime/logo.png?rs=AGWjSYS1M1jVtEIIwr5iFRx6zZnUOTj23Q&sqp=-oaymwEKCIwBEIwBIABQAQi30IzKBQ",
    "primaryColor": "#DC4538",
    "startsWith": "t",
    "fallbackColor": "#4285F4",
    "RGB": {
      "r": 220,
      "g": 69,
      "b": 56
    }
  },
  {
    "id": "remixer",
    "name": "Remixer",
    "summary": "A set of cross-platform libraries and protocols to allow the sharing of design values and live refinement of apps during the development process",
    "iconUrlSmall": "https://www.gstatic.com/opensource/project-images/remixer/logo.png?rs=AGWjSYTBgQzeXCmgJGtj60Avuohi-ajM1Q&sqp=-oaymwEICEwQTCAAUAEIrdCMygU",
    "iconUrlMedium": "https://www.gstatic.com/opensource/project-images/remixer/logo.png?rs=AGWjSYRgBL6sza4Vx_DlL60KU3whDoqVAQ&sqp=-oaymwEKCIwBEIwBIABQAQit0IzKBQ",
    "primaryColor": "#E783FB",
    "startsWith": "r",
    "fallbackColor": "#FBBC05",
    "RGB": {
      "r": 231,
      "g": 131,
      "b": 251
    }
  },
  {
    "id": "chromium",
    "name": "Chromium",
    "summary": "A safer, faster, and more stable web browser",
    "iconUrlSmall": "https://www.gstatic.com/opensource/project-images/chromium/logo.png?rs=AGWjSYSS9emrk8fsE8ilistYp-hehxe9aw&sqp=-oaymwEICEwQTCAAUAEI3s-MygU",
    "iconUrlMedium": "https://www.gstatic.com/opensource/project-images/chromium/logo.png?rs=AGWjSYRKTmOG5h_4JAV3RX7qC43SlcASqw&sqp=-oaymwEKCIwBEIwBIABQAQjez4zKBQ",
    "primaryColor": "#83AEF6",
    "startsWith": "c",
    "fallbackColor": "#34A853",
    "RGB": {
      "r": 131,
      "g": 174,
      "b": 246
    }
  },
  {
    "id": "appauth",
    "name": "AppAuth",
    "summary": "Native App SDK for OAuth 2.0 and OpenID Connect implementing modern best practices",
    "iconUrlSmall": "https://www.gstatic.com/opensource/project-images/appauth/logo.svg",
    "iconUrlMedium": "https://www.gstatic.com/opensource/project-images/appauth/logo.svg",
    "primaryColor": "#2bace2",
    "startsWith": "a",
    "fallbackColor": "#34A853",
    "RGB": {
      "r": 43,
      "g": 172,
      "b": 226
    }
  },
  {
    "id": "jterm-cswithandroid",
    "name": "JTerm at Smith 2017 Course Materials: CS With Android",
    "summary": "Starter code and example solutions for JTerm course, CS with Android, in January 2017",
    "startsWith": "j",
    "fallbackColor": "#34A853",
    "RGB": {
      "r": 52,
      "g": 168,
      "b": 83
    }
  },
  {
    "id": "grpc",
    "name": "gRPC",
    "summary": "A high-performance universal RPC framework",
    "iconUrlSmall": "https://www.gstatic.com/opensource/project-images/grpc/logo.png?rs=AGWjSYRrOGw1DlS5z6vkQzr0OghB3IRMZA&sqp=-oaymwEICEwQTCAAUAEItomr2QU",
    "iconUrlMedium": "https://www.gstatic.com/opensource/project-images/grpc/logo.png?rs=AGWjSYQ3FewM1B7a0VvhcYBMv0tHuoWX5A&sqp=-oaymwEKCIwBEIwBIABQAQi2iavZBQ",
    "primaryColor": "#44AFB8",
    "startsWith": "g",
    "fallbackColor": "#EA4335",
    "RGB": {
      "r": 68,
      "g": 175,
      "b": 184
    }
  },
  {
    "id": "ganeti",
    "name": "Ganeti",
    "summary": "A virtual machine cluster management tool",
    "iconUrlSmall": "https://www.gstatic.com/opensource/project-images/ganeti/logo.png?rs=AGWjSYSpPU48geCulsW-AB8lYJEXFo3seQ&sqp=-oaymwEICEwQTCAAUAEI9c-MygU",
    "iconUrlMedium": "https://www.gstatic.com/opensource/project-images/ganeti/logo.png?rs=AGWjSYSN06hxhOdtlYL9QrMPpWUZMR-fow&sqp=-oaymwEKCIwBEIwBIABQAQj1z4zKBQ",
    "primaryColor": "#B5D1FA",
    "startsWith": "g",
    "fallbackColor": "#34A853",
    "RGB": {
      "r": 181,
      "g": 209,
      "b": 250
    }
  },
  {
    "id": "flutter",
    "name": "Flutter",
    "summary": "Build high-fidelity apps for iOS and Android from a single codebase",
    "iconUrlSmall": "https://www.gstatic.com/opensource/project-images/flutter/logo.png?rs=AGWjSYTe_6TsIt5_u5DE_DfSQeK_fUjDEg&sqp=-oaymwEICEwQTCAAUAEI88-MygU",
    "iconUrlMedium": "https://www.gstatic.com/opensource/project-images/flutter/logo.png?rs=AGWjSYQ1k3HIfNH4B0MlpAiv3cxy8XqcwA&sqp=-oaymwEKCIwBEIwBIABQAQjzz4zKBQ",
    "primaryColor": "#4CC2F7",
    "startsWith": "f",
    "fallbackColor": "#FBBC05",
    "RGB": {
      "r": 76,
      "g": 194,
      "b": 247
    }
  },
  {
    "id": "hstspreload",
    "name": "HSTS Preload List",
    "summary": "The submission website for the Chromium-maintained HSTS preload list, which is used by major browsers to hardcode HTTPS-only sites",
    "iconUrlSmall": "https://www.gstatic.com/opensource/project-images/hstspreload/logo.svg",
    "iconUrlMedium": "https://www.gstatic.com/opensource/project-images/hstspreload/logo.svg",
    "primaryColor": "#1ac222",
    "startsWith": "h",
    "fallbackColor": "#FBBC05",
    "RGB": {
      "r": 26,
      "g": 194,
      "b": 34
    }
  },
  {
    "id": "badwolf",
    "name": "BadWolf",
    "summary": "Temporal graph store abstraction layer",
    "iconUrlSmall": "https://www.gstatic.com/opensource/project-images/badwolf/logo.png?rs=AGWjSYTR41y0H8G1uqqNm8aQR7q9Anbmtg&sqp=-oaymwEICEwQTCAAUAEIn8-MygU",
    "iconUrlMedium": "https://www.gstatic.com/opensource/project-images/badwolf/logo.png?rs=AGWjSYQCjlnMytINQtPzuoGgmWcb3ZKOcg&sqp=-oaymwEKCIwBEIwBIABQAQifz4zKBQ",
    "primaryColor": "#1E4689",
    "startsWith": "b",
    "fallbackColor": "#34A853",
    "RGB": {
      "r": 30,
      "g": 70,
      "b": 137
    }
  },
  {
    "id": "squidwarden",
    "name": "squidwarden",
    "summary": "Frontend to squid to manage ACLs",
    "startsWith": "s",
    "fallbackColor": "#34A853",
    "RGB": {
      "r": 52,
      "g": 168,
      "b": 83
    }
  },
  {
    "id": "neuroglancer",
    "name": "Neuroglancer",
    "summary": "WebGL-based viewer for volumetric data",
    "startsWith": "n",
    "fallbackColor": "#4285F4",
    "RGB": {
      "r": 66,
      "g": 133,
      "b": 244
    }
  },
  {
    "id": "google-authenticator-libpam",
    "name": "Google Authenticator PAM module",
    "summary": "HOTP/TOTP second factor PAM module",
    "startsWith": "g",
    "fallbackColor": "#34A853",
    "RGB": {
      "r": 52,
      "g": 168,
      "b": 83
    }
  },
  {
    "id": "upspin",
    "name": "Upspin",
    "summary": "An experimental framework for naming and sharing files and other data securely, uniformly, and globally",
    "iconUrlSmall": "https://www.gstatic.com/opensource/project-images/upspin/logo.png?rs=AGWjSYR6o4JRgj6bXCudS8qCAMymYZcoNQ&sqp=-oaymwEICEwQTCAAUAEIvNCMygU",
    "iconUrlMedium": "https://www.gstatic.com/opensource/project-images/upspin/logo.png?rs=AGWjSYR8NogatQRGnAbDHYtrOKBzDgPgpA&sqp=-oaymwEKCIwBEIwBIABQAQi80IzKBQ",
    "primaryColor": "#fffce6",
    "startsWith": "u",
    "fallbackColor": "#EA4335",
    "RGB": {
      "r": 255,
      "g": 252,
      "b": 230
    }
  },
  {
    "id": "oppia",
    "name": "Oppia",
    "summary": "A tool for collaboratively creating and sharing interactive online lessons",
    "iconUrlSmall": "https://www.gstatic.com/opensource/project-images/oppia/logo.png?rs=AGWjSYS9x-AN3LCJ3wkrKb-cwmXikQj0DA&sqp=-oaymwEICEwQTCAAUAEImNCMygU",
    "iconUrlMedium": "https://www.gstatic.com/opensource/project-images/oppia/logo.png?rs=AGWjSYRdfOh2ereKA7kjMm48M7wRec2sNw&sqp=-oaymwEKCIwBEIwBIABQAQiY0IzKBQ",
    "primaryColor": "#16AA9D",
    "startsWith": "o",
    "fallbackColor": "#FBBC05",
    "RGB": {
      "r": 22,
      "g": 170,
      "b": 157
    }
  },
  {
    "id": "protobuf",
    "name": "Protobuf",
    "summary": "Google's data interchange format",
    "startsWith": "p",
    "fallbackColor": "#FBBC05",
    "RGB": {
      "r": 251,
      "g": 188,
      "b": 5
    }
  },
  {
    "id": "benchmark",
    "name": "benchmark",
    "summary": "A microbenchmark support library",
    "startsWith": "b",
    "fallbackColor": "#4285F4",
    "RGB": {
      "r": 66,
      "g": 133,
      "b": 244
    }
  },
  {
    "id": "kubernetes",
    "name": "Kubernetes",
    "summary": "Automated container deployment, scaling, and management",
    "iconUrlSmall": "https://www.gstatic.com/opensource/project-images/kubernetes/logo.svg",
    "iconUrlMedium": "https://www.gstatic.com/opensource/project-images/kubernetes/logo.svg",
    "primaryColor": "#326ce5",
    "startsWith": "k",
    "fallbackColor": "#4285F4",
    "RGB": {
      "r": 50,
      "g": 108,
      "b": 229
    }
  },
  {
    "id": "material-components-ios",
    "name": "Material Components for iOS",
    "summary": "Modular and customizable Material Design UI components for iOS",
    "iconUrlSmall": "https://www.gstatic.com/opensource/project-images/material-components-ios/logo.png?rs=AGWjSYRSa9YBNIb5U6Oi4ZebGiTyfIPQuA&sqp=-oaymwEICEwQTCAAUAEIk9CMygU",
    "iconUrlMedium": "https://www.gstatic.com/opensource/project-images/material-components-ios/logo.png?rs=AGWjSYRJufihcla3pM8JFDPNR-JL-eRkog&sqp=-oaymwEKCIwBEIwBIABQAQiT0IzKBQ",
    "primaryColor": "#00e676",
    "startsWith": "m",
    "fallbackColor": "#4285F4",
    "RGB": {
      "r": 0,
      "g": 230,
      "b": 118
    }
  },
  {
    "id": "genomewarp",
    "name": "GenomeWarp",
    "summary": "GenomeWarp translates genetic variants from one genome assembly version to another",
    "startsWith": "g",
    "fallbackColor": "#4285F4",
    "RGB": {
      "r": 66,
      "g": 133,
      "b": 244
    }
  },
  {
    "id": "cloudprint_logocert",
    "name": "Google Cloud Print Logo Certification Tool",
    "summary": "Google Cloud Print Logo Certification Automation",
    "iconUrlSmall": "https://www.gstatic.com/opensource/project-images/cloudprint_logocert/logo.png?rs=AGWjSYSYcMcq8T1DOyWeNtdF2EasfSxY0g&sqp=-oaymwEICEwQTCAAUAEI5s-MygU",
    "iconUrlMedium": "https://www.gstatic.com/opensource/project-images/cloudprint_logocert/logo.png?rs=AGWjSYRjdtGyPHf2t8EkQZjnuWoko-36oA&sqp=-oaymwEKCIwBEIwBIABQAQjmz4zKBQ",
    "primaryColor": "#577EBF",
    "startsWith": "g",
    "fallbackColor": "#FBBC05",
    "RGB": {
      "r": 87,
      "g": 126,
      "b": 191
    }
  },
  {
    "id": "science-journal",
    "name": "Open Science Journal",
    "summary": "Science Journal Android code",
    "iconUrlSmall": "https://www.gstatic.com/opensource/project-images/science-journal/logo.png?rs=AGWjSYSvqBlcaqZJUWpcSRRyscZCuKITqg&sqp=-oaymwEICEwQTCAAUAEIkKOm1QU",
    "iconUrlMedium": "https://www.gstatic.com/opensource/project-images/science-journal/logo.png?rs=AGWjSYTGzmaGSvElBxnAweou7HNTPKTqGw&sqp=-oaymwEKCIwBEIwBIABQAQiQo6bVBQ",
    "primaryColor": "#3C7CE9",
    "startsWith": "o",
    "fallbackColor": "#4285F4",
    "RGB": {
      "r": 60,
      "g": 124,
      "b": 233
    }
  },
  {
    "id": "vim-plugins",
    "name": "Google Vim plugins",
    "summary": "Plugins to enhance the Vim text editor",
    "startsWith": "g",
    "fallbackColor": "#34A853",
    "RGB": {
      "r": 52,
      "g": 168,
      "b": 83
    }
  },
  {
    "id": "tensorflow",
    "name": "TensorFlow",
    "summary": "TensorFlow is a fast, flexible, and scalable open source machine learning library for research and production",
    "iconUrlSmall": "https://www.gstatic.com/opensource/project-images/tensorflow/logo.png?rs=AGWjSYQ1HC13sEyluXwZoYWC2w2i9qsPjQ&sqp=-oaymwEICEwQTCAAUAEIttCMygU",
    "iconUrlMedium": "https://www.gstatic.com/opensource/project-images/tensorflow/logo.png?rs=AGWjSYQ7IXg35u8B_D41kSCIRrHjJYcfng&sqp=-oaymwEKCIwBEIwBIABQAQi20IzKBQ",
    "primaryColor": "#E26026",
    "startsWith": "t",
    "fallbackColor": "#34A853",
    "RGB": {
      "r": 226,
      "g": 96,
      "b": 38
    }
  },
  {
    "id": "mcm",
    "name": "Minimal Configuration Manager",
    "summary": "A suite of tools to provide configuration management",
    "startsWith": "m",
    "fallbackColor": "#34A853",
    "RGB": {
      "r": 52,
      "g": 168,
      "b": 83
    }
  },
  {
    "id": "ezgantt",
    "name": "EZ Gantt",
    "summary": "Easily view a Google Spreadsheet as a Gantt Chart",
    "iconUrlSmall": "https://www.gstatic.com/opensource/project-images/ezgantt/logo.png?rs=AGWjSYRUHGn6VJ9z6_bES0EJwbfnkDxX-w&sqp=-oaymwEICEwQTCAAUAEI7s-MygU",
    "iconUrlMedium": "https://www.gstatic.com/opensource/project-images/ezgantt/logo.png?rs=AGWjSYTR0v_Sr9w-KDtd7gaUfwLAtgrz1w&sqp=-oaymwEKCIwBEIwBIABQAQjuz4zKBQ",
    "primaryColor": "#A59B94",
    "startsWith": "e",
    "fallbackColor": "#FBBC05",
    "RGB": {
      "r": 165,
      "g": 155,
      "b": 148
    }
  },
  {
    "id": "dart-sass",
    "name": "Dart Sass",
    "summary": "A Dart implementation of Sass",
    "iconUrlSmall": "https://www.gstatic.com/opensource/project-images/dart-sass/logo.png?rs=AGWjSYT3AeO8-KcAJEcaxh_HZ_V-F8J7Ug&sqp=-oaymwEICEwQTCAAUAEI6M-MygU",
    "iconUrlMedium": "https://www.gstatic.com/opensource/project-images/dart-sass/logo.png?rs=AGWjSYQg4x3vqdZiEWGVDEwSi1KkM9Veiw&sqp=-oaymwEKCIwBEIwBIABQAQjoz4zKBQ",
    "primaryColor": "#C76395",
    "startsWith": "d",
    "fallbackColor": "#34A853",
    "RGB": {
      "r": 199,
      "g": 99,
      "b": 149
    }
  },
  {
    "id": "permission.site",
    "name": "permission.site",
    "summary": "A site to test the interaction of web APIs and browser permissions",
    "iconUrlSmall": "https://www.gstatic.com/opensource/project-images/permission.site/logo.png?rs=AGWjSYQ1qvWvz5pHYPqfIniSyTJ4u6TXsg&sqp=-oaymwEICEwQTCAAUAEIn9CMygU",
    "iconUrlMedium": "https://www.gstatic.com/opensource/project-images/permission.site/logo.png?rs=AGWjSYRT5_8kyuLvW5Qomjbu1kPPz8gmSg&sqp=-oaymwEKCIwBEIwBIABQAQif0IzKBQ",
    "primaryColor": "#545454",
    "startsWith": "p",
    "fallbackColor": "#4285F4",
    "RGB": {
      "r": 84,
      "g": 84,
      "b": 84
    }
  }
]
class Graph extends Component {
  selectedProjectChanged = object => {
    this.props.isProjectChanged(object);
  }
  shouldComponentUpdate(){
    return false
  }
  render() {
    console.log('graph render')
    return (
      <div className="graph">
        <ReactCircularGraph
          width={720}
          height={720}
          data={data}
          config={config}
          selectedNode={node => this.props.CanvasData(node)}
          selectedProjectChanged={object => { this.selectedProjectChanged(object); }}
        />
        <Circular />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ isProjectChanged, CanvasData }, dispatch);
}
export default connect(null, mapDispatchToProps)(Graph)

