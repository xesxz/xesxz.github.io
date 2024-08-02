import{_ as n,o,c as a,b as e}from"./app.ace0dae9.js";const t={},r=e("div",{class:"language-c# ext-c#"},[e("pre",{class:"language-c#"},[e("code",null,`using System;
using System.Management;

class Program
{
    static void Main()
    {
        // \u83B7\u53D6CPU\u4FE1\u606F
        ManagementObjectSearcher mosCPU = new ManagementObjectSearcher("SELECT * FROM Win32_Processor");
        foreach (ManagementObject moCPU in mosCPU.Get())
        {
            Console.WriteLine("CPU: " + moCPU["Name"]);
            Console.WriteLine("CPU Cores: " + moCPU["NumberOfCores"]);
            Console.WriteLine("CPU Current Speed: " + moCPU["CurrentClockSpeed"] + " MHz");
        }

        // \u83B7\u53D6\u5185\u5B58\u4FE1\u606F
        ManagementObjectSearcher mosRam = new ManagementObjectSearcher("SELECT * FROM Win32_OperatingSystem");
        foreach (ManagementObject moRam in mosRam.Get())
        {
            Console.WriteLine("Total Physical Memory: " + (Convert.ToDouble(moRam["TotalVisibleMemorySize"]) / 1048576) + " GB");
            Console.WriteLine("Available Physical Memory: " + (Convert.ToDouble(moRam["FreePhysicalMemory"]) / 1048576) + " GB");
        }

        // \u83B7\u53D6\u64CD\u4F5C\u7CFB\u7EDF\u4FE1\u606F
        ManagementObjectSearcher mosOS = new ManagementObjectSearcher("SELECT * FROM Win32_OperatingSystem");
        foreach (ManagementObject moOS in mosOS.Get())
        {
            Console.WriteLine("Operating System: " + moOS["Caption"] + " " + moOS["Version"]);
        }

        // \u83B7\u53D6\u786C\u76D8\u4FE1\u606F
        ManagementObjectSearcher mosDisk = new ManagementObjectSearcher("SELECT * FROM Win32_DiskDrive");
        foreach (ManagementObject moDisk in mosDisk.Get())
        {
            Console.WriteLine("Disk Model: " + moDisk["Model"]);
            Console.WriteLine("Disk Size: " + Convert.ToDouble(moDisk["Size"]) / 1000000000 + " GB");
        }

        // \u7B49\u5F85\u7528\u6237\u8F93\u5165\u540E\u9000\u51FA
        Console.WriteLine("\\nPress Enter to exit...");
        Console.ReadLine();
    }
}
`)])],-1),s=[r];function i(m,c){return o(),a("div",null,s)}var C=n(t,[["render",i],["__file","c#.html.vue"]]);export{C as default};
