<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/r0zar/amplify-category-data-importer">
    <img src="https://s3.amazonaws.com/aws-mobile-hub-images/aws-amplify-logo.png" alt="Logo" width="400" height="60">
  </a>

  <h3 align="center"> Amplify Category 📡 Data Importer</h3>

  <p align="center">
    The easiest way to import CSV files into DynamoDB.
    <br />
    <br />
    <a href="https://github.com/r0zar/amplify-category-data-importer">View Demo</a>
    ·
    <a href="https://github.com/r0zar/amplify-category-data-importer/issues">Report Bug</a>
    ·
    <a href="https://github.com/r0zar/amplify-category-data-importer/issues">Request Feature</a>
  </p>
</p>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![License][license-shield]][license-url]

<em> WARNING: This plugin is in alpha, and may undergo backwards incompatible changes.</em>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

Amplify is great at replicating environments- but a database without data is a lonely place.

This project aims to automate the process of seeding/importing for Amplify projects.

Check out [Installation](https://github.com/r0zar/amplify-category-data-importer#installation) to set up a S3 Bucket that streams data to your DynamoDB table.

### Built With

- [Wizage's plugin starter template](https://github.com/wizage/mob406)
- [Implementing bulk CSV ingestion to Amazon DynamoDB](https://github.com/aws-samples/csv-to-dynamodb)

<!-- GETTING STARTED -->

## Getting Started

To add this plugin to your Amplify project, follow these simple steps.

### Prerequisites

- [amplify-cli](https://github.com/aws-amplify/amplify-cli#install-the-cli)

### Installation

1. Install the plugin from npm

```sh
npm install -g amplify-category-data-importer
```

2. Add the plugin to your project

```sh
amplify plugin add amplify-category-data-importer
```

<!-- USAGE EXAMPLES -->

## Usage

### Adding the resources

Add the data import resources to your amplify backend directory with:

```sh
amplify data-importer add
amplify push
```

### Uploading CSV to DynamoDB

#### 📃 Get a CSV file

A common use case is to export data from DynamoDB using the AWS Console, make some edits, and re-import it.

#### 📝 Rename it

Change the name of the CSV file so it looks something like this:

`Users-gkcm6todfzh5tlpgntm3lyrrgu-dev.csv`

It must match the DynamoDB table you're targeting for upload.

#### 🗑️ Drop it in the bucket

Done! 🎉 Your DynamoDB table is now seeded with data.

#### Note: other data types

By default this will upload data as strings.

If you have other types, edit the Lambda in the AWS Console.

Here's an example function to upload data based on type.

```py
def write_row_to_dynamo(tableName, row):
    try:
        table = dynamodb.Table(tableName)
    except:
        print("Couldn't find DynamoDB table. Make sure the uploaded file name matches the table name.")

    try:
        with table.batch_writer() as batch:
            print(row['id'])
            batch.put_item(Item={
                'id': row['id'],
                '__typename': row['__typename'],
                'updatedAt': row['updatedAt'],
                'createdAt': row['createdAt'],
                'count': int(row['count']),
                'total': int(row['total']),
                })
    except Exception as e:

        print(e)
```

<!-- ROADMAP -->

## Roadmap

The short term goal is to reduce the amount of manual steps required for a CSV import workflow.

See the [Github Project Roadmap](https://github.com/r0zar/amplify-category-data-importer/projects/1) for a list of proposed improvements.

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the ISC License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Twitter - [@lordrozar](https://twitter.com/lordrozar)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [An overview of tools to export from DynamodDB to CSV.](https://medium.com/@quodlibet_be/an-overview-of-tools-to-export-from-dynamoddb-to-csv-d2707ad992ac)
- [Implementing bulk CSV ingestion to Amazon DynamoDB](https://aws.amazon.com/blogs/database/implementing-bulk-csv-ingestion-to-amazon-dynamodb/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/r0zar/amplify-category-data-importer.svg?style=flat-square
[contributors-url]: https://github.com/r0zar/amplify-category-data-importer/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/r0zar/amplify-category-data-importer.svg?style=flat-square
[forks-url]: https://github.com/r0zar/amplify-category-data-importer/network/members
[stars-shield]: https://img.shields.io/github/stars/r0zar/amplify-category-data-importer.svg?style=flat-square
[stars-url]: https://github.com/r0zar/amplify-category-data-importer/stargazers
[issues-shield]: https://img.shields.io/github/issues/r0zar/amplify-category-data-importer.svg?style=flat-square
[issues-url]: https://github.com/r0zar/amplify-category-data-importer/issues
[license-shield]: https://img.shields.io/github/license/r0zar/amplify-category-data-importer.svg?style=flat-square
[license-url]: https://github.com/r0zar/amplify-category-data-importer/blob/master/LICENSE
