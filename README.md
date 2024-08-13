# Minimalistic Portfolio Template for Academics: A Modern and Easy Way

Academic portfolios are essential for showcasing research, publications, and projects to potential employers, collaborators, and the academic community. However, creating a professional and visually appealing portfolio can be challenging, especially for individuals with limited web development experience. This project aims to provide a minimalistic portfolio template designed specifically for academics, researchers, and students.

The template features a clean and modern design, making it easy to customize and update with personal information, research interests, publications, and projects. Users can easily modified sections, add new pictures and texts. The template is built using Next.js, a popular React framework, and Tailwind CSS, a utility-first CSS framework, ensuring a responsive and mobile-friendly design. By providing a simple and intuitive solution for creating academic portfolios, this template empowers individuals to showcase their work effectively and professionally.

## Use the template

1. Click on the **Use this template** button on the top right corner of this page and choose **Create a new repository**.
![Use this template](/public/readme/use-template.png)
2. Then, go to your new repository and open the `data` folder, you will find several `.json` files that you can modify to add your personal information, research interests, publications, and projects. You may find more details on how to modify these files in the next section.
![Data Dir](/public/readme/data_dir.png)
3. After you finished modifying the `.json` files, go to [Vercel](https://vercel.com/) and create a new account if you don't have one. Then, import your repository to Vercel and deploy it. You can find more details on how to deploy your Next.js app on Vercel [here](https://nextjs.org/docs/deployment).

## Modify the content

> **Warning:** Please note that if you don't want certain field to appear on your portfolio, please leave that field blank. Do not remove the field!

### Personal Information

To modify your personal information, open the `personalInfo.json` file in the `data` folder. You can change the following fields:

| Field Name              | Type           | Description                                                                                                     |
|-------------------------|----------------|-----------------------------------------------------------------------------------------------------------------|
| `name`                  | String         | The person's name, e.g., "John Doe".                                                                            |
| `domain`                | String         | The domain of the personal website, e.g., "github.com".                                                         |
| `email`                 | String         | The contact email, e.g., "test@brown.edu".                                                                      |
| `work_place`            | String         | The name of the workplace, e.g., "Brown University".                                                            |
| `work_place_url`        | String (URL)   | The URL of the workplace, e.g., "https://www.example.com".                                                      |
| `site_description`      | String         | A description of the personal website, e.g., "This is a personal website".                                      |
| `greetings_on_homepage` | String         | The greeting message on the homepage, e.g., "Welcome!".                                                         |
| `self_description_brief`| String         | A brief self-description, e.g., "PhD Student in Computational Biology".                                         |
| `self_description_detail`| Array of Strings | A detailed self-description, with each array element as a paragraph.                                            |
| `cv_link`               | String (URL)   | The link to the person's CV, e.g., "/cv.pdf".                                                                   |
| `research_interests`    | Array of Strings | A list of research interests, e.g., ["Machine Learning", "Deep Learning", "Computer Vision"].                  |
| `social_media`          | Dictionary     | A dictionary object containing links to social media profiles, including LinkedIn, GitHub, X (formerly Twitter), Instagram, Facebook, Google Scholar, and ORCID. |

### News

To modify the news section, open the `news.json` file in the `data` folder. You can change the following fields, and don't worry if you don't have any news to share, you can leave the file empty:

| Field Name | Type   | Description                                                                                                    |
|------------|--------|----------------------------------------------------------------------------------------------------------------|
| `id`       | Integer| A unique identifier for the news item.                                                                         |
| `time`     | String | The date of the news item in the format `MM/DD/YYYY`.                                                          |
| `content`  | String | The content or description of the news item.                                                                   |
| `href`     | String | A URL link associated with the news item. If no link is available, this field may be an empty string.          |

### Experience

To modify the experience section, open the `experience.json` file in the `data` folder. You can change the following fields:

#### Job Experience

| Field Name    | Type          | Description                                                                                                                      |
|---------------|---------------|----------------------------------------------------------------------------------------------------------------------------------|
| `id`          | Integer       | A unique identifier for the job experience entry.                                                                                |
| `title`       | String        | The job title, e.g., "Software Engineer Intern".                                                                                 |
| `company`     | String        | The company or organization name, e.g., "Meta".                                                                                  |
| `location`    | String        | The location of the job, e.g., "Menlo Park, CA".                                                                                 |
| `project_name`| String        | The name of the project associated with the job, if any.                                                                          |
| `instructor`  | String        | The name of the instructor or supervisor, if any.                                                                                |
| `start_date`  | String        | The start date of the job in `MM/YYYY` format, e.g., "06/2023".                                                                  |
| `end_date`    | String        | The end date of the job in `MM/YYYY` format, e.g., "09/2023".                                                                    |
| `description` | Array of Strings | A list of responsibilities and achievements during the job.                                                                      |
| `href`        | String (URL)  | A URL link to more information about the job, if available. If no link is provided, this field may be an empty string.           |

#### Extracurricular

| Field Name    | Type          | Description                                                                                                                      |
|---------------|---------------|----------------------------------------------------------------------------------------------------------------------------------|
| `id`          | Integer       | A unique identifier for the extracurricular activity entry.                                                                      |
| `title`       | String        | The title of the extracurricular activity, e.g., "Extracurricular Activity".                                                     |
| `company`     | String        | The name of the organization, e.g., "Company Name".                                                                              |
| `location`    | String        | The location of the activity, e.g., "City, State".                                                                               |
| `project_name`| String        | The name of the project associated with the activity, if any.                                                                    |
| `instructor`  | String        | The name of the instructor or supervisor, if any.                                                                                |
| `start_date`  | String        | The start date of the activity in `Month Year` format.                                                                           |
| `end_date`    | String        | The end date of the activity in `Month Year` format.                                                                             |
| `description` | Array of Strings | A list of activities or accomplishments during the extracurricular activity.                                                    |
| `href`        | String (URL)  | A URL link to more information about the activity, if available. If no link is provided, this field may be an empty string.      |

#### Education

| Field Name    | Type          | Description                                                                                                                      |
|---------------|---------------|----------------------------------------------------------------------------------------------------------------------------------|
| `id`          | Integer       | A unique identifier for the education entry.                                                                                     |
| `school`      | String        | The name of the educational institution, e.g., "Brown University".                                                               |
| `degree`      | String        | The degree obtained or being pursued, e.g., "M.S. in Computational Biology".                                                     |
| `status`      | String        | The current status of the degree (e.g., "In Progress", "Graduated").                                                             |
| `start_date`  | String        | The start date of the degree program in `MM/YYYY` format, e.g., "09/2023".                                                       |
| `end_date`    | String        | The expected or actual graduation date in `MM/YYYY` format, e.g., "05/2025".                                                     |
| `gpa`         | String        | The Grade Point Average (GPA), e.g., "3.5 / 4.0".                                                                                |
| `courses`     | Array of Strings | A list of relevant courses taken during the degree program.                                                                      |
| `other_info`  | Array of Strings | Any additional information or honors related to the degree.                                                                      |
| `href`        | String (URL)  | A URL link to more information about the education, if available. If no link is provided, this field may be an empty string.     |

### Publications

To modify the publications section, open the `publications.json` file in the `data` folder. You can change the following fields:

| Field Name  | Type            | Description                                                                                                                           |
|-------------|-----------------|---------------------------------------------------------------------------------------------------------------------------------------|
| `id`        | String          | A unique identifier for the publication entry.                                                                                        |
| `href`      | String (URL)    | A URL link to the full publication, if available. If no link is provided, this field may be an empty string.                           |
| `year`      | String          | The publication year of the work, e.g., "2022".                                                                                       |
| `abstract`  | Array of Strings | A list of paragraphs summarizing the publication's abstract. Each string in the array represents a separate paragraph.                  |
| `keywords`  | Array of Strings | A list of keywords relevant to the publication, e.g., "Deep Learning", "Genomics", etc.                                                |
| `citation`  | String          | The full citation for the publication, formatted according to the relevant style guide.                                                |
| `bold_name` | String          | The name of the author to be bolded in the citation, usually the person the list is focused on, e.g., "Doe, J.".                        |
| `status`    | String          | The current status of the publication, e.g., "In Progress", "Under Review", or "Published".                                            |

### Projects

To modify the projects section, open the `projects.json` file in the `data` folder. You can change the following fields:

| Field Name    | Type            | Description                                                                                                                             |
|---------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| `id`          | Integer         | A unique identifier for the project entry.                                                                                              |
| `title`       | String          | The title of the project, e.g., "Machine Learning for Drug Discovery".                                                                  |
| `description` | Array of Strings | A list of paragraphs describing the project. Each string in the array represents a separate paragraph.                                   |
| `image`       | String (URL)    | A URL or path to an image associated with the project. If no image is provided, this field may be an empty string.                      |
| `href`        | Object          | A dictionary containing key-value pairs where the key is the type of link (e.g., "Github", "Demo", "File") and the value is the corresponding URL. |

### Research

To modify the research section, open the `research.json` file in the `data` folder. You can change the following fields:

| Field Name      | Type             | Description                                                                                                                           |
|-----------------|------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| `id`            | Integer          | A unique identifier for the research entry.                                                                                           |
| `research_name` | String           | The title of the research project, e.g., "Machine Learning for Drug Discovery".                                                       |
| `company`       | Array of Strings | A list of companies or institutions involved in the research, e.g., ["Brown University", "Google Research"].                          |
| `instructor`    | Array of Strings | A list of instructors or supervisors involved in the research, e.g., ["Dr. John Doe", "Dr. Jane Smith"].                              |
| `project`       | String           | The name of the specific project within the research, if applicable. This field may be an empty string if not provided.               |
| `collaborators` | Array of Strings | A list of collaborators involved in the research, e.g., ["Alice Johnson", "Bob Smith"]. If no collaborators are listed, this field may be an empty array. |
| `abstract`      | Array of Strings | A list of paragraphs summarizing the research abstract. Each string in the array represents a separate paragraph.                     |
| `keywords`      | Array of Strings | A list of keywords relevant to the research, e.g., ["Machine Learning", "Drug Discovery", "Deep Learning"].                           |
| `href`          | Object           | A dictionary containing key-value pairs where the key is the type of link (e.g., "Github", "Demo", "File") and the value is the corresponding URL. |
| `status`        | String           | The current status of the research, e.g., "In Progress", "Completed".                                                                 |