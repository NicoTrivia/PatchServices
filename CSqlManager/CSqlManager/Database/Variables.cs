﻿
namespace CSqlManager;

public class Variables
{
    static Dictionary<string, string> variables = new Dictionary<string, string>();
    static bool initialiazed = false;

    static readonly string filePath = "patch_services.properties";
    static readonly string filePathSecret = "secret.properties";
    
    public static void SaveVariables(Dictionary<string, object> variables)
    {
        // Create or overwrite the file
        using (StreamWriter writer = new StreamWriter(filePath))
        {
            foreach (var kvp in variables)
            {
                writer.WriteLine(kvp.Key + "=" + kvp.Value);
            }
        }
        MyLogManager.Debug("Variables have been saved");
    }
    
    public static string RetrieveVariable(string variableName)
    {
        if (initialiazed || File.Exists(filePath)) {
            if (!initialiazed && File.Exists(filePath))
            {
                using (StreamReader reader = new StreamReader(filePath))
                {
                    string line;
                    while ((line = reader.ReadLine()) != null)
                    {
                        string[] parts = line.Split('=');
                        if (parts.Length == 2)
                        {
                            string key = parts[0];
                            string value = parts[1];
                            variables[key] = value;
                        }
                    }
                }
                MyLogManager.Debug("Variables have been successfully retrieved");

                if (File.Exists(filePathSecret))
                {
                    using (StreamReader reader = new StreamReader(filePathSecret))
                    {
                        string line;
                        while ((line = reader.ReadLine()) != null)
                        {
                            string[] parts = line.Split('=');
                            if (parts.Length == 2)
                            {
                                string key = parts[0];
                                string value = parts[1];
                                variables[key] = value;
                            }
                        }
                    }
                    MyLogManager.Debug("Secret Variables have been successfully retrieved");
                    initialiazed = true;

                }
            }

            if (variables.ContainsKey(variableName))
            {
                return variables[variableName];
            }
            else
            {
                MyLogManager.Error($"Variable '{variableName}' not found in the file.");
            }
        }
        else
        {
            MyLogManager.Error("File not found. No variables to retrieve.");
        }

        return null;
    }
}