using Microsoft.Extensions.Options;
using OrchardCore.ResourceManagement;

namespace OrchardCore.Themes.TheHeadlessTheme
{
    public class ResourceManagementOptionsConfiguration : IConfigureOptions<ResourceManagementOptions>
    {
        private static readonly ResourceManifest manifest;

        static ResourceManagementOptionsConfiguration()
        {
            manifest = new ResourceManifest();

            manifest
                .DefineStyle("TheHeadlessTheme-bootstrap-oc")
                .SetUrl("~/TheHeadlessTheme/css/bootstrap-oc.min.css", "~/TheHeadlessTheme/css/bootstrap-oc.css")
                .SetVersion("1.0.0");
        }

        public void Configure(ResourceManagementOptions options)
        {
            options.ResourceManifests.Add(manifest);
        }
    }
}
