# AWS Deployment credentials

## (Inside this folder)Create a folder ".aws" with "credentials" file inside, with the following content:

```
[default]
aws_access_key_id=DUMMYAWSACCESSKEYID
aws_secret_access_key=DUMMYAWSSECRETACCESSKEY

[aws-cloud]
aws_access_key_id=<INSERT_AWS_ACCESS_KEY_ID_HERE>
aws_secret_access_key=<INSERT_AWS_SECRET_ACCESS_KEY_HERE>
```
 
 - Change the 'credentials' file, putting the AWS credentials keys at the 'aws-cloud' profile. This profile will be selected in the serverless framework configuration(which can also be selected by stage if needed).
 - The 'default' profile must be left with dummy credentials, preventing accidental usage of production credentials with aws-cli or others resources inside the container.
 - This file will be put inside the container using a docker-compose volume to configure aws credentials

 # CAUTION TO NOT COMMIT THIS CREDENTIALS FILE